
export const aboutAnimation = function () {
    const aboutPage = document.querySelector('.about');
    const aboutText = document.querySelector('.about-text');
    const options = {
        root: null,
        rootMargin: '-30% 0% -30% 0%',
        threshold: 0
    };

    // console.log(aboutPage.offsetTop);
    const aboutObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.width = '100%';
                aboutText.style.opacity = '1';
                aboutText.style.transform = 'translateX(0%)'
            } else {
                entry.target.style.width = '70%';
                aboutText.style.opacity = '0';
                aboutText.style.transform = 'translateX(-100%)'
            }  
        })
    }, options);
    aboutObserver.observe(aboutPage);
}



