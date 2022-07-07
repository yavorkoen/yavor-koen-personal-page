export function animateHeadings() {
    let headings = document.querySelectorAll('.heading');

    let options = {

    }

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');

            }
        })
    }, options);

    
    headings.forEach(h => {
        observer.observe(h);
    })
}
