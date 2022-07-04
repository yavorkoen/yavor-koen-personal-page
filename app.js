let letters = document.querySelectorAll('.home span');


function changeLetters() {

    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        letters[i].style.transform = 'scale(1)'
        // letters[i].style.transform = 'scale(0.5)'
        console.log(letters[i]);
    }
}
function changeLettersBack() {
    
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        // letters[i].style.transform = 'scale(1)'
        letters[i].style.transform = 'scale(0.5)'
        console.log(letters[i]);
    }
}
setInterval(changeLetters, 200);
setInterval(changeLettersBack, 200);
