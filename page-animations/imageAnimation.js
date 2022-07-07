export function imageAnimation() {
    const images = Array.from(document.querySelectorAll('.image'));
    const otherInterests = document.querySelector('.other-interests');

    const options = {
        // rootMargin: '-200px',
        threshold: thersholdGenerator()
    }
    let observer = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let rotateAngle = 15 - 15 *(entry.intersectionRatio);
                let position = 20 + entry.intersectionRatio * 100;
                images[0].style.top = position + 'px';
                images[1].style.transform = `rotateZ(${rotateAngle}deg)`;
            }
        })
    }, options);
    observer.observe(otherInterests);
}

function thersholdGenerator() {
    let thresholds = [];
    for(let i = 0; i <= 1; i+= 0.01){
        thresholds.push(i.toFixed(2));
    }
    return thresholds;
}