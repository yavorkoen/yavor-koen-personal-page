export function changeHeaderBackground() {

    const header = document.querySelector('header');
    const articles = document.querySelectorAll('article');
    // console.log(about.getBoundingClientRect().y)
    
    const options = {
        root: null,
        rootMargin: '0% 0% -86% 0%',
        threshold: 0
    };
    
    const observer = new IntersectionObserver(function (entries, observer) {
    
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // console.log(entry);
                // console.log(entry.intersectionRatio);
                let backgroundColor = window.getComputedStyle( entry.target ,null).getPropertyValue('background-color');
                let color = window.getComputedStyle( entry.target ,null).getPropertyValue('color');
                header.style.backgroundColor = backgroundColor;
                header.style.color = color;
            }
        })
    }, options);

    articles.forEach(article => {
        observer.observe(article);
    })
}



function thersholdGenerator() {
    let thresholds = [];
    for(let i = 0; i <= 1; i+= 0.01){
        thresholds.push(i.toFixed(2));
    }
    console.log(thresholds)
    return thresholds;
}
