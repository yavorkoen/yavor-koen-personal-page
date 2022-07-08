export function imageAnimation() {
    const images = Array.from(document.querySelectorAll('.image'));
    const otherInterests = document.querySelector('.other-interests');
    const travelImages = document.querySelectorAll('.travel-image');

    const options = {
        // rootMargin: '-200px',
        threshold: thersholdGenerator()
    }
    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let rotateAngle = 15 - 15 * (entry.intersectionRatio * 5);
                let position = 100 - entry.intersectionRatio * 200;
                images[0].style.transform = `translateY(${position}px)`
                images[1].style.transform = `rotateZ(${rotateAngle}deg)`;
            }
        })
    }, options);
    observer.observe(otherInterests);


    let observerTravellingMedia = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            console.log(entry.isIntersecting)
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
        observerTravellingMedia.observe(image);
    })

}

function thersholdGenerator() {
    let thresholds = [];
    for (let i = 0; i <= 1; i += 0.01) {
        thresholds.push(i.toFixed(2));
    }
    return thresholds;
}