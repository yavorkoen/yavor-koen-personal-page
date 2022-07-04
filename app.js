let letters = document.querySelectorAll('.home span');


function changeLetters() {

    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
        letters[i].style.transform = 'scale(1.2)'
    }
}
function changeLettersBack() {
    
    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
        letters[i].style.transform = 'scale(0.5)'
    }
}
setInterval(changeLetters, 200);
setInterval(changeLettersBack, 200);
