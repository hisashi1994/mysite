$(function(){
    // ヘッダー
    // スクロールでヘッダー出現


    // ページトップ　
    // スライダー
    $('#slider').slick({
        speed: 2000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    // スクロール
    // タイトル押したらトップへ
    var Btn = $('#page-top');
    var profileBtn = $('#nav-profile');
    var skillsBtn = $('#nav-skills');
    var contactBtn = $('#nav-contact');
    Btn.click(function(){
        $('body,html').animate({
            scrollTop: 0
        },1000);
    });
    // プロフィールまでスクロール
    profileBtn.click(function(){
        $('body,html').animate({
            scrollTop: 980
        },1000);
    });
    // スキルまでスクロール
    skillsBtn.click(function(){
        $('body,html').animate({
            scrollTop: 3050
        },1000);
    });
    // お問い合わせまでスクロール
    contactBtn.click(function(){
        $('body,html').animate({
            scrollTop: 3920
        },1000);
    });

    // コンテンツ
    // 横からプロフィールのスライド
    $('.box').addClass('move');
    $(window).scroll(function(){
        $(".Profile-content").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
            $(this).find(".box").removeClass('move');
        } else {
            $(this).find(".box").addClass('move');
        }
        });
    });

    // キャリア
    // スクロールで下から出現
    function animation(){
        $('.careea').each(function(){
        //ターゲットの位置を取得
        var target = $(this).offset().top;
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var windowHeight = $(window).height();
        //ターゲットまでスクロールするとフェードインする
        if (scroll > target - (windowHeight - 230)){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        }
        });
    
    $('.careea-item').click(function(){
        var $careeaContent = $(this).find('.careea-content');
        if($careeaContent.hasClass('open')){
            $careeaContent.removeClass('open');
            $careeaContent.slideUp();
        } else {
            $careeaContent.addClass('oper');
            $careeaContent.slideDown();
        }
    });


        // スキル
        // スクロールで下から出現
        $('.item').each(function(){
            //ターゲットの位置を取得
            var target = $(this).offset().top;
            //スクロール量を取得
            var scroll = $(window).scrollTop();
            //ウィンドウの高さを取得
            var windowHeight = $(window).height();
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - (windowHeight - 150)){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
            });
        }
    animation();
    $(window).scroll(function (){
        animation();
    });
});