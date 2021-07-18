let gel0 = document.querySelector('section .gel-0');
let gel1 = document.querySelector('section .gel-1');
let gel2 = document.querySelector('section .gel-2');
let gel3 = document.querySelector('section .gel-3');
let gel4 = document.querySelector('section .gel-4');
let gel5 = document.querySelector('section .gel-5');
let gel6 = document.querySelector('section .gel-6');
let gel7 = document.querySelector('section .gel-7');
let gel8 = document.querySelector('section .gel-8');
let gel9 = document.querySelector('section .gel-9');
let gel10 = document.querySelector('section .gel-10');
let gel11 = document.querySelector('section .gel-11');
let gel12 = document.querySelector('section .gel-12');
let gel13 = document.querySelector('section .gel-13');
let gel14 = document.querySelector('section .gel-14');
let gel15 = document.querySelector('section .gel-15');
let gel16 = document.querySelector('section .gel-16');
let gel17 = document.querySelector('section .gel-17');
let gel18 = document.querySelector('section .gel-18');
let gel19 = document.querySelector('section .gel-19');
let gel20 = document.querySelector('section .gel-20');
let gel21 = document.querySelector('section .gel-21');
let gel22 = document.querySelector('section .gel-22');
let gel23 = document.querySelector('section .gel-23');
let gel24 = document.querySelector('section .gel-24');
let gel25 = document.querySelector('section .gel-25');
let gel26 = document.querySelector('section .gel-26');
let gel27 = document.querySelector('section .gel-27');
let gel28 = document.querySelector('section .gel-28');
let gel29 = document.querySelector('section .gel-29');
let gel30 = document.querySelector('section .gel-30');
let btn = document.getElementById('btn');
let title = document.getElementById('title');
let hamburger = document.getElementById('hamburger');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');
let span4 = document.querySelector('.span4');
let navlink = document.getElementById('nav-link');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    // TITLE
    title.style.letterSpacing = value * 0.02 + 'px';

    // BTN 
    btn.style.marginTop = value * 0.5 + 'px'

    // Memberi style top pada gelombang
    gel0.style.top = -60 + (value * 0.900) + 'px';
    gel1.style.top = -50 + (value * 0.870) + 'px';
    gel2.style.top = -30 + (value * 0.840) + 'px';
    gel3.style.top = -10 + (value * 0.810) + 'px';
    gel4.style.top = 0 + (value * 0.780) + 'px';
    gel5.style.top = 20 + (value * 0.750) + 'px';
    gel6.style.top = 40 + (value * 0.720) + 'px';
    gel7.style.top = 60 + (value * 0.690) + 'px';
    gel8.style.top = 80 + (value * 0.660) + 'px';
    gel9.style.top = 100 + (value * 0.630) + 'px';
    gel10.style.top = 120 + (value * 0.600) + 'px';
    gel11.style.top = 140 + (value * 0.570) + 'px';
    gel12.style.top = 160 + (value * 0.540) + 'px';
    gel13.style.top = 180 + (value * 0.510) + 'px';
    gel14.style.top = 200 + (value * 0.480) + 'px';
    gel15.style.top = 220 + (value * 0.450) + 'px';
    gel16.style.top = 240 + (value * 0.420) + 'px';
    gel17.style.top = 260 + (value * 0.310) + 'px';
    gel18.style.top = 280 + (value * 0.280) + 'px';
    gel19.style.top = 300 + (value * 0.250) + 'px';
    gel20.style.top = 320 + (value * 0.220) + 'px';
    gel21.style.top = 340 + (value * 0.190) + 'px';
    gel22.style.top = 360 + (value * 0.160) + 'px';
    gel23.style.top = 380 + (value * 0.130) + 'px';
    gel24.style.top = 400 + (value * 0.110) + 'px';
    gel25.style.top = 420 + (value * 0.090) + 'px';
    gel26.style.top = 440 + (value * 0.070) + 'px';
    gel27.style.top = 460 + (value * 0.050) + 'px';
    gel28.style.top = 480 + (value * 0.030) + 'px';
    gel29.style.top = 500 + (value * 0.020) + 'px';
    gel30.style.top = 520 + (value * 0.010) + 'px';






});

hamburger.addEventListener('click', function () {
    span1.classList.toggle('span1close')
    span2.classList.toggle('span2close')
    span3.classList.toggle('span3close')
    span4.classList.toggle('span4close')
    navlink.classList.toggle('nav-linktoggle');
})