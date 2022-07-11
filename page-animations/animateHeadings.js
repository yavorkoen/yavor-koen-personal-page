export function animateHeadings() {
    let headings = document.querySelectorAll('.heading');

    let options = {
        threshold: 0.50
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

    
    headings.forEach(heading => {
        observer.observe(heading);
    })
}
