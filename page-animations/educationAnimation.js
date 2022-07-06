export function educationAnimation() {
    const animatedItems = document.querySelectorAll('.animated-line');
    console.log(animatedItems);

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
        });
    }, options)
    animatedItems.forEach(x => {
        observer.observe(x)
    })
}
