
const form =document.querySelector('#form');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
const usernameInput = document.querySelector('#username');
// const submit =document.querySelector('#submit');  

form.addEventListener('submit', (event)=>{
    // event.preventDefault();
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }
    // alert('clicked');
    // event.preventDefault();

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.cardnum');
    // const inputContainer = form.querySelectorAll('.cvc');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    
    return result;
}

function validateForm() {
    // USERNAME
    if(usernameInput.value.trim() === ''){
        setError(usernameInput, 'Name can not be empty');
    }else {
        setSuccess(usernameInput);
    }
    //EMAIL
    // if(emailInput.value.trim() === ''){
    //     setError(emailInput, 'Provide email address');
    // }else if(isEmailValid(emailInput.value)){
    //     setSuccess(emailInput);
    // }else{
    //     setError(emailInput, 'Provide valid email address');
    // }

    //PASSWORD
    // if(passwordInput.value.trim() === ''){
    //     setError(passwordInput, 'Password can not be empty');
    // }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
    //     setError(passwordInput, 'Password min 6 max 20 charecters');
    // }else {
    //     setSuccess(passwordInput);
    // }
    //CONFIRM PASSWORD
    // if(confirmPasswordInput.value.trim()==''){
    //     setError(confirmPasswordInput, 'Password can not be empty');
    // }else if(confirmPasswordInput.value !== passwordInput.value){
    //     setError(confirmPasswordInput, 'Password does not match');
    // }else {
    //     setSuccess(confirmPasswordInput);
    // }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    // const paragraph = parent.querySelector('p');
    // paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

// function isEmailValid(email){
//     const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     return reg.test(email);
// }




















    
    
    
    // const email = document.querySelector('#email');
    // const password = document.querySelector('#password');
    // const username = document.querySelector('#username');
    // const submit =document.querySelector('#submit');

    // submit.addEventListener('click' ,(e) =>{
    //     e.preventDefault();
    //     //username validate 
    //     if (username.value.trim() ==''){
    //         error(username , '');
    //     } else{
    //         success(username);
    //     }
        //password
        // if (password.value.trim() ==''){
        //     error(password , 'Email cannot be empty');
        // } else{
        //     success(password);
        // }


    // });

    // function error(element, msg){
    //     element.style.border= '2px solid red';
        //get the parent element

        // const parent =element.parentElement ;
        // const error = parent.querySelector('span');
        // error.textContent=msg;
        // error.style.visibility= 'visible';
    // }

    // function success(element){
    //     element.style.border= '2px solid green';
        //get the parent element

        // const parent =element.parentElement ;
        // const error = parent.querySelector('span');
        // error.style.visibility= 'hidden';
    // }