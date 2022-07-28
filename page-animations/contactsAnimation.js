export function contactsAnimation() {
    const contacts = document.querySelector('.contacts-container');

    const options = {};

    const contactsObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = '100%';
                entry.target.style.borderRadius = '0';
                observer.disconnect();
            }
        })
    }, options);

    contactsObserver.observe(contacts);
}