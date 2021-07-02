var Menu = {

    el: {
        ham: $('.block-menu'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom')
    },

    init: function() {
        Menu.bindUIactions();
    },

    bindUIactions: function() {
        Menu.el.ham
            .on(
                'click',
                function(event) {
                    Menu.activateMenu(event);
                    event.preventDefault();
                }
            );
    },

    activateMenu: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
};

Menu.init();
$(document).ready(function() {
    $('.block-menu').click(function(e) {
        e.preventDefault();
        $('.block-menu-navigation').toggleClass('active');
        $(this).closest('.box-header').find('.block-menu').toggleClass("active");
    })
});

$('.block-slider-main').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    nextArrow: '<i class="fas fa-chevron-left"></i>',
    prevArrow: '<i class="fas fa-chevron-right"></i>',
});

$('.block-slider-team').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});