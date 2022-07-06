
export const aboutAnimation = function () {
    const aboutPage = document.querySelector('.about');
    const aboutText = document.querySelector('.about-text');
    const options = {
        threshold: 0.1
    };

    console.log(aboutPage.offsetTop);
    const aboutObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            console.log(entry.isIntersecting);
            if(entry.isIntersecting) {
                entry.target.style.width = '100%';
                entry.target.style.border = '1px solid rgba(23, 23, 23, 0)';
                aboutText.style.opacity = '1';
                aboutText.style.transform = 'translateY(0px)'
                observer.disconnect();
            }
            
            
        })
    }, options);
    aboutObserver.observe(aboutPage);
}



