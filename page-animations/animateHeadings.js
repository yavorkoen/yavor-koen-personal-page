export function animateHeadings() {
    let headings = document.querySelectorAll('.heading');
    console.log(headings)

    let options = {

    }

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target)
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
