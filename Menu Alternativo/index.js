var formSignIn = document.querySelector('#signin');
var formSignUp = document.querySelector('#signup');
var btnColor = document.querySelector('.btnColor');

document.querySelector('#btnSignIn').addEventListener('click', () => {
    formSignIn.style.left = "25px";
    formSignUp.style.left = "450px";
    btnColor.style.left = "0px";
});

document.querySelector('#btnSignUp').addEventListener('click', () => {
    formSignIn.style.left = "-450px";
    formSignUp.style.left = "25px";
    btnColor.style.left = "110px";
});