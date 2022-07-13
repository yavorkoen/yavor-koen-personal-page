export function showHideNavMobile() {

    const menuBtn = document.querySelector('.menu-button');
    const navigationMobile = document.querySelector('.navigation-mobile');
    const navLinkMobile = document.querySelectorAll('.navigation-mobile li');
    menuBtn.addEventListener('click', (e) => {
        navigationMobile.classList.toggle('active');
        if(navigationMobile.classList.contains('active')) {
            menuBtn.textContent= 'X';
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
        window.addEventListener('scroll', () => {
            if(navigationMobile.classList.contains('active')) {
                navigationMobile.classList.remove('active');
                menuBtn.textContent = 'menu';
            }
        })
    }