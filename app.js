import { homeAnimation } from "./page-animations/homeAnimation.js";
import { aboutAnimation } from "./page-animations/aboutAnimation.js";
import { changeHeaderBackground } from "./page-animations/changeHeaderBackground.js";
import { educationAnimation } from "./page-animations/educationAnimation.js";
import { animateHeadings } from "./page-animations/animateHeadings.js";
import { imageAnimation } from "./page-animations/imageAnimation.js";
import { sportAnimation } from "./page-animations/sportIconsAnimation.js";


changeHeaderBackground();
homeAnimation();
aboutAnimation();
educationAnimation();
animateHeadings();
imageAnimation();
sportAnimation();

function showNavMobile() {

    const menuBtn = document.querySelector('.menu-button');
    const navigationMobile = document.querySelector('.navigation-mobile');
    const navLinkMobile = document.querySelectorAll('.navigation-mobile li');
    menuBtn.addEventListener('click', (e) => {
        navigationMobile.classList.toggle('active');
        if(navigationMobile.classList.contains('active')) {
            menuBtn.textContent = 'x'
            navLinkMobile.forEach((link, index )=> {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5}s`;
            })
        } else {
            menuBtn.textContent = 'menu';
            navLinkMobile.forEach((link, index )=> {
                link.style.animation = ``; 
            })
        }
    });
}

showNavMobile();

