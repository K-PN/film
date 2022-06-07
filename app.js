$(".menu-chinh").click(function () {
        //Khi click vào Assistive touch, nếu các menu con đang ẩn thì hiện lên
    if ($(".menu-list").css('display') == 'none') $(".menu-list").show(200, 'swing');
        // đang hiện thì ẩn đi
    else $(".menu-list").fadeOut('fast');
});
//click vào 1 trong các menu con thì tất cả cùng ẩn đi
// thiết kế chức năng do quản trị viên code, có thể tham khảo trên 123itvn.com
$(".menu-1,.menu-2,.menu-3,.menu-4,.menu-5,.menu-6").click(function () {
$(".menu-list").fadeOut('fast');
});
    // code cho nút lên đầu trang - backtotop
$(".menu-1").click(function () {
    $("body,html").animate({ scrollTop: 0 }, "slow");
});
$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: false,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})

var videoSlide = document.getElementById('videoSlide');
        
        function imgTransition(){
            videoSlide.play();
            videoSlide.style.opacity=1;
        }