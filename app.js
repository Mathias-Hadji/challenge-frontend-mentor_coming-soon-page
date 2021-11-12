const inputEmail = document.querySelector('.bloc-input input');
const errorTxtEmail = document.querySelector('.error-email');
const iconErrorEmail = document.querySelector('.icon-error-email');


const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

inputEmail.addEventListener('change', (e) => {

    if(!regexEmail.test(e.target.value)) {

        inputEmail.style.border = "2px solid red";
        errorTxtEmail.classList.add('active');
        iconErrorEmail.classList.add('active');

    } else {

        inputEmail.style.border = "1px solid hsl(0, 36%, 70%)";
        errorTxtEmail.classList.remove('active');
        iconErrorEmail.classList.remove('active');
    }
});