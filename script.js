let hamburger = document.querySelector('input');
let content = document.querySelector('ul');
let mode = document.querySelector('.mode');

hamburger.addEventListener('click', function() {
    content.classList.toggle('slide')
} );

mode.addEventListener('click', function() {
   let darks = document.querySelector('body').classList.toggle('dark');
   let span = document.querySelectorAll('.menu-toggler span');
   let teks = document.querySelectorAll('a');

   if(darks) {
       document.querySelector('nav').style.backgroundColor = "#341260";
       document.querySelector('nav ul').style.backgroundColor = "#341260";
       document.querySelector('.mode').src = 'moon (2).png';

       for(let i = 0; i < 5; i++){
           teks[i].style.color = "white";
           span[i].style.backgroundColor = "white";
       }
   }
   else {
    document.querySelector('.mode').src = 'night-mode.png';
    document.querySelector('nav').style.backgroundColor = "rgb(235, 233, 230)";
    document.querySelector('nav ul').style.backgroundColor = "rgb(235, 233, 230)";

    for(let i = 0; i < 5; i++){
        teks[i].style.color = "black";
        span[i].style.backgroundColor = "black";
    }
   }
});