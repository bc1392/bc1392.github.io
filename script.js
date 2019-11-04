$('.trigger-top').click(() => {
    $('html, body').animate({ scrollTop: 0 }, 1000);
})

$('#fun-spinny-boi').click(() => {
    $('#fun-spinny-boi').addClass('do-thing')
})

$('#fun-spinny-boi').on('animationend', () => {
    $('#fun-spinny-boi').removeClass('do-thing')
})