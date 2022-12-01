const form=document.querySelector('#create-account-form');
const usernameInput=document.querySelector('#username');
const emailInput=document.querySelector('#email');
const passwordInput=document.querySelector('#password');
const confirmPasswordInput=document.querySelector('#confirm-password');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validateForm();
});

function validateForm(){
    //username
    if (usernameInput.value.trim() == ''){
        SetError(usernameInput, 'Name cannot be empty');
    }
    else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15){
        SetError(usernameInput,'Name min 5 and max 15 characters');
    }else{
        setSuccess(usernameInput);
    }
    //email
    if (emailInput.value.trim() == ''){
        SetError(emailInput,'provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        SetError(emailInput, 'provide valid email address');
    }
    //password
    if(passwordInput.value.trim() == ''){
        SetError(passwordInput,'password cannot be empty')
    }else if (passwordInput.value.trim().length <6 || passwordInput.value.trim().length>20 ){
        SetError(passwordInput, 'password min 6 max 20 characters')
    }else{
        setSuccess(passwordInput);
    }

    //confirm password
    if(confirmPasswordInput.value
    .trim()== ''){
        SetError(confirmPasswordInput,'passsword cannot be empty');
    }else if(confirmPasswordInput.value !== passwordInput.value){
        SetError(confirmPasswordInput,'password does not match');
    }else{
        setSuccess(confirmPasswordInput);
    }
}
function SetError(element,ErrorMessage){
    const parent=element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const span=parent.querySelector('span');
    span.textcontent=ErrorMessage;
}
function setSuccess(element,successMessage){
    const parent=element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success')
    const span=parent.querySelector('span');
    span.textcontent=successMessage;

}
function isEmailValid(email){
    const reg=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email)

}