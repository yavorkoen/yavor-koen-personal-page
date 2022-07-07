export function sportAnimation() {
    const icons = document.querySelector('.icon-container');

    const observer = new IntersectionObserver(function (entries, observer) {

        entries.forEach(entry => {
            console.log(entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.style.animationName = 'slideIcons';
                //    entry.target.style.animationIterationCount = 'infinite';
            } else {
                // entry.target.style.animationIterationCount = '0';
                entry.target.style.animationName = null;

            }
        })
    }, {});

    observer.observe(icons)

}