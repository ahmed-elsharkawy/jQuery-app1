$('.container img').mouseenter((e)=>{
    $('.imgPointer img').attr({src:e.target.src});
    $('body').append(`<div class="imgPointer"><img src="imgs/3.jpg" alt=""></div>`)
    $('.container img').mousemove((e)=>{
        $('.imgPointer').css('left', e.clientX + 10);
        $('.imgPointer').css('top', e.clientY + 10);
    })
})
$('.container img').mouseleave(()=>{
    $('.imgPointer').css('display', 'none');
})