'use strict';

// select elements
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const mobileEl = document.getElementById("mobile");
const newPasswordEl = document.getElementById("new-password");
const confirmPasswordEl = document.getElementById("confirm-password");

const inputElArray = [usernameEl, emailEl, mobileEl, newPasswordEl, confirmPasswordEl];

const showError = function (el, message){
    const formControlEl = el.parentElement;
        formControlEl.className = 'form-control error'
        const smallEl = formControlEl.querySelector('small');
        smallEl.textContent = message;
};

const showSuccess = function(el){
    const formControlEl = el.parentElement;
        formControlEl.className = 'form-control success';
}

const checkRequired = function (arr){
    for (const el of arr){
        if (el.value === ''){
            showError(el, `${el.name} is required`)
    }else {
       showSuccess(el);
        }
    }
};

const checkLength = function (el, min, max){
    if(el.value.length < min){
       showError(el, `${el.name} should have ${min} characters`)
    }else if(el.value.length > max){
        showError(el, `${el.name} should not be more than ${max} characters`);
    } else{
        showSuccess(el);
    }
};

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(inputElArray);
    checkLength(usernameEl, 5, 12);
    checkLength(mobileEl, 10, 10);
    checkLength(newPasswordEl, 8, 15);
    passwordMatch(newPasswordEl, confirmPasswordEl);
});

const passwordMatch = function (elOne, elTwo){
    if(elOne.value==='' || elTwo.value === ''){
        showError(elOne, `New Password is mandatory`)
        showError(elTwo, `Confirm Password is mandatory`)
    }else{
    if(elOne.value === elTwo.value){
        showSuccess(elOne);
        showSuccess(elTwo)
    }else{
        showError(elOne, `Password do not match`)
        showError(elTwo, `Password do not match`)
    }
}};



// Functions

// Events
// formEl.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if(usernameEl.value === ''){
//         const formControlEl = usernameEl.parentElement;
//         formControlEl.classList.add('error');
//     }else {
//         const formControlEl = usernameEl.parentElement;
//         formControlEl.classList.add('success');
//     }
//     if(emailEl.value === ''){
//         const formControlEl = emailEl.parentElement;
//         formControlEl.classList.add('error');
//     }else {
//         const formControlEl = emailEl.parentElement;
//         formControlEl.classList.add('success');
//     }
//     if(mobileEl.value === ''){
//         const formControlEl = mobileEl.parentElement;
//         formControlEl.classList.add('error');
//     }else {
//         const formControlEl = mobileEl.parentElement;
//         formControlEl.classList.add('success');
//     }
//     if(newPasswordEl.value === ''){
//         const formControlEl = newPasswordEl.parentElement;
//         formControlEl.classList.add('error');
//     }else {
//         const formControlEl = newPasswordEl.parentElement;
//         formControlEl.classList.add('success');
//     }
//     if(confirmPasswordEl.value === ''){
//         const formControlEl = confirmPasswordEl.parentElement;
//         formControlEl.classList.add('error');
//     }else {
//         const formControlEl = confirmPasswordEl.parentElement;
//         formControlEl.classList.add('success');
//     }
// });
