export function showHideNavMobile() {

    const menuBtn = document.querySelector('.menu-button');
    const navigationMobile = document.querySelector('.navigation-mobile');
    const navLinkMobile = document.querySelectorAll('.navigation-mobile li');
    menuBtn.addEventListener('click', (e) => {
        navigationMobile.classList.toggle('active');
        if (navigationMobile.classList.contains('active')) {
            menuBtn.textContent = 'X';
            navLinkMobile.forEach((link, index) => {
                link.style.animation = `navLinkFadeIn 0.5s ease ${index / 7}s forwards`;
            })
        } else {
            menuBtn.textContent = 'menu';
            navLinkMobile.forEach((link, index) => {
                link.style.animation = `navLinkFadeOut ease ${index / 1.5}s forwards`;
            })
        }
    });
    window.addEventListener('scroll', () => {
        if (navigationMobile.classList.contains('active')) {
            navigationMobile.classList.remove('active');
            menuBtn.textContent = 'menu';
            navLinkMobile.forEach((link, index) => {
                link.style.animation = `navLinkFadeOut ease ${index / 5}s forwards`;
            })
        }
    })
}