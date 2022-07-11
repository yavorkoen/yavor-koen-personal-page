export function imageAnimation() {

    const musicImages = Array.from(document.querySelectorAll('.music-image'));
    const music = document.querySelector('.music');
    const travelImages = document.querySelectorAll('.travel-image');

    const images = Array.from(document.querySelectorAll('.image'));
    const otherInterests = document.querySelector('.other-interests');

    const options = {
        rootMargin: '-100px 0px 200px 0px',
        threshold: thersholdGenerator()
    }
    let musicImagesobserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let rotateAngle = 15 - 15 * (entry.intersectionRatio);
                let position = 100 - entry.intersectionRatio * 100;
                musicImages[0].style.transform = `translateY(${position}px)`
                musicImages[1].style.transform = `rotateZ(${rotateAngle}deg)`;
            }
        })
    }, options);
   

    // let observer = new IntersectionObserver(function (entries, observer) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             let rotateAngle = 15 - 15 * (entry.intersectionRatio * 5);
    //             let position = 100 - entry.intersectionRatio * 200;
    //             images[0].style.transform = `translateY(${position}px)`
    //             images[1].style.transform = `rotateZ(${rotateAngle}deg)`;
    //         }
    //     })
    // }, options);
    // observer.observe(otherInterests);


    let TravellingMediaObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transform = `scale(1)`;
            } else {
                entry.target.style.transform = 'scale(0.5)';
            }
        })
    }, {
        threshold: 0.50
    });
    travelImages.forEach((image, index) => {
        image.style.transitionDelay = 100 * index + 'ms';
        TravellingMediaObserver.observe(image);
    })

}

function thersholdGenerator() {
    let thresholds = [];
    for (let i = 0; i <= 1; i += 0.01) {
        thresholds.push(i.toFixed(2));
    }
    return thresholds;
}