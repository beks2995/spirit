$("#team-slider").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 3
        },
        769: {
            items: 4
        },
        1200: {
            items: 4
        },
        1400: {
            items: 6
        }
    }
});

$("#logo-slider").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        769: {
            items: 3
        },
        900:{
            items: 3
        },
        1200: {
            items: 4
        },
        1400: {
            items: 4
        },
        1600: {
            items: 5
        },

    }
});
$("#testimonials-slider").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        },
        2000: {
            items: 1
        }
    }
});
$('.response').on('click',function () {
    $('.list-items').toggleClass('active')
    $('.response').toggleClass('active')
});
$('.list-item a').on('click',function () {
    $('.list-items').removeClass('active')
    $('.response').removeClass('active')
});