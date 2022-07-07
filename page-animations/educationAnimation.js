export function educationAnimation() {
    const animatedItems = document.querySelectorAll('.animated-line');

    let options = {

    }

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
                
            }
        });
    }, options)
    animatedItems.forEach(x => {
        observer.observe(x)
    })
}