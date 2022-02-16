$(document).ready(function(){
	$('.header').height($(window).height());
})

/*Adding scroll listener for transparent navigation bar*/
var nav= document.querySelector('nav')
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 100){
        nav.classList.add('bg-dark','shadow');
    }
    else{
        nav.classList.remove('bg-dark','shadow');
    }
})

setTimeout(function() {
	$('#demo-modal').modal();
}, 500);