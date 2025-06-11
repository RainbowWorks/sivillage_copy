$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
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