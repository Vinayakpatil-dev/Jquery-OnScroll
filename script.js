let circle = document.querySelector('.circle');

window.addEventListener('mousemove',function(event){
    setTimeout(function(){
        let xValue = event.pageX;
        let yValue = event.pageY;
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    },100) 
});

$('.container h1').textillate({
    in:{
       effect:'fadeInUp',
       delay:15,
    },
    out:{
        effect:'fadeOutUp',
        delay:15,
    },
    loop:true,
    minDisplayTime:1000,
});

gsap.to('.fade',{
    scrollTrigger:{
       trigger : '.img',
    //    markers : 'true',
       start : 'top 10%',
       toggleActions : 'play pause resume reverse', 
    },
    opacity:0,
    scrub : 1,
    duration:2,
    y : -20, 

    onComplete : function(){
        $('#end').textillate('start')
    }
}),

$('#end').textillate({
    autoStart : false, 
    in:{
       effect:'fadeInUp',
       delay:10,
    },
});