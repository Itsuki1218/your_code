/////////ヘッダーナビゲーション/////////

$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

/////////ふわっと表示/////////////

$(function () {
    $(window).scroll(function () {
        $(".effect-fade").each(function () {
            var elemPos = $(this).offset().top; /* 要素の位置を取得 */
            var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
            var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
            if (scroll > elemPos - windowHeight) {
                /* 要素位置までスクロール出来たときに動作する */
                $(this).addClass("effect-scroll");
            }
        });
    });
    jQuery(window).scroll();
});

/////////////アコーディオン///////////
//アコーディオンをクリックした時の動作
$('.title').on('click', function () {//タイトル要素をクリックしたら
    $('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる

    var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得

    if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去    
    } else {//それ以外は
        $('.close').removeClass('close'); //クラス名closeを全て除去した後
        $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
        $(findElm).slideDown(500);//アコーディオンを開く
    }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function () {
    $('.accordion-area li:first-of-type div').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function (index, element) {	//openクラスを取得
        var Title = $(element).children('.title');	//openクラスの子要素のtitleクラスを取得
        $(Title).addClass('close');				///タイトルにクラス名closeを付与し
        var Box = $(element).children('.box');	//openクラスの子要素boxクラスを取得
        $(Box).slideDown(500);					//アコーディオンを開く
    });
});


////////////swiper//////////////////

const mySwiper = new Swiper('.swiper-container', {
    loop: true,        //画像のループ
    effect: 'slide',   //切り替わるときのアニメーション
    speed: 3000,       //画像の切替スピード
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3.5,
    spaceBetween: 40,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        reverseDirection: false
    },
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
        1500: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        960: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
})


