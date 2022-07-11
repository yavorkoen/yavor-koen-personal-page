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


const menuBtn = document.querySelector('.menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
menuBtn.addEventListener('click', (e) => {
    navigationMobile.classList.toggle("active");
})

