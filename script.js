$(document).ready(() => {

    $('.trigger-top').click(() => {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    })

    $('#fun-spinny-boi').click(() => {
        $('#fun-spinny-boi').addClass('do-thing')
    })

    $('#fun-spinny-boi').on('animationend', () => {
        $('#fun-spinny-boi').removeClass('do-thing')
    })

    setTimeout(() => {
        $('.animated').removeClass('animated fadeIn fadeInUp fadeInDown slow flip delay-0p5s delay-1s delay-1p5s delay-2s delay-2p5s delay-3s delay-3p5s delay-4s delay-4p5s delay-5s')
    }, 3250)

})