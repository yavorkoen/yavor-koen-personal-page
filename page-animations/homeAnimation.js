export const homeAnimation = function () {
    const letters = document.querySelectorAll('.home span');
    const home = document.querySelector('.home');
    const intersections = new Map();
    let options = {
        threshold: 0.6
    }

    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && intersections.get(entry.target) != null) {
                clearInterval(intersections.get(entry.target));
                intersections.set(entry.target, setInterval(changeLetters, 300));
            } else if (entry.isIntersecting) {
                intersections.set(entry.target, setInterval(changeLetters, 300));
            } else if (!entry.isIntersecting && intersections.get(entry.target) != null) {
                clearInterval(intersections.get(entry.target));
                intersections.set(null);
                letters.forEach(l => {
                    l.style.transform = 'scale(1)';
                })
            }
            function changeLetters() {
                for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
                    if (i < 9) {
                        letters[i].style.transform = 'scale(1)';
                    }
                }
                for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
                    if (i < 9) {
                        letters[i].style.transform = 'scale(0.7)';
                    }
                }
            }
        });
    }, options);

    observer.observe(home);
}