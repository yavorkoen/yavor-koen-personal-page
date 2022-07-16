export function imageAnimation() {

    const musicImages = Array.from(document.querySelectorAll('.music-image'));
    const music = document.querySelector('.music');
    const travelImages = document.querySelectorAll('.travel-image');

    const images = Array.from(document.querySelectorAll('.image'));
    const otherInterests = document.querySelector('.other-interests');
    
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