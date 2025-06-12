$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on')
        /*active를 붙여도 된다. 일반적으로는 on 사용한다.*/
        $('#header .hd_wrap h1').toggleClass('on')
    })
});


$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000, arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
    });

    const main_deal_slide = new Swiper('.main_deal_slide', {/*옵션입력*/
        loop: true,
        slidesPerView: 4, /*swiperjs에서 받아왔음*/
        spaceBetween: 80, /*swiperjs에서 받아왔음*/
        autoplay: {
            delay: 0, /*0이면 머무르는 시간이 0초*/
            disableOnInteraction: false,
        }, /*swiperjs에서 받아왔음*/

        speed: 5000, /*2500은 2.5초이다*/

        pagination: {
            el: ".page_bar",
            type: "progressbar",
        },
        slidesPerView: 4,
        breakpoints: {
            1440: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3,
            },
            960: {
                slidesPerView: 2.5,
            },
            540: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        }
    });

});

$(function () {
    $('.main_product .tab_product button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함
        console.log(idx);

        $('.main_product .tab_product button').removeClass('on');
        $(this).addClass('on');

        $('.main_product .tab_product_content .con').removeClass('on');
        $('.main_product .tab_product_content .con').eq(idx).addClass('on');
    });
});