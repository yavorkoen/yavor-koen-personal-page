export const homeAnimation = function () {
    const letters = document.querySelectorAll('.home span');
    const home = document.querySelector('.home');
    const intersectionsOne = new Map();
    let options = {
        threshold: 0.6
    }

    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && intersectionsOne.get(entry.target) != null) {
                clearInterval(intersectionsOne.get(entry.target));
                intersectionsOne.set(entry.target, setInterval(changeLetters, 200));
            } else if (entry.isIntersecting) {
                intersectionsOne.set(entry.target, setInterval(changeLetters, 200));
            } else if (!entry.isIntersecting && intersectionsOne.get(entry.target) != null) {
                clearInterval(intersectionsOne.get(entry.target));
                intersectionsOne.set(null);
                letters.forEach(l => {
                    l.style.transform = 'scale(1)';
                    // observer.disconnect();
                })
            }
            function changeLetters() {
                for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
                    if (i < 9) {
                        letters[i].style.transform = 'scale(1.2)';
                    }
                }
                for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
                    if (i < 9) {
                        letters[i].style.transform = 'scale(0.5)';
                    }
                }
            }
        });
    }, options);

    observer.observe(home);
}