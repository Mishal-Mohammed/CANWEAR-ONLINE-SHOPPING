// vallidation for Login Modal

let username = document.forms['form']['username'];
let userPassword = document.forms['form']['password'];

let name_error = document.getElementById("name_error");
let password_error = document.getElementById("password_error");

username.addEventListener('textInput', name_Verify);
userPassword.addEventListener('textInput', pass_Verify);


function validateLogin() {
    if (username.value.length < 6) {
        username.style.border = "1px solid red";
        name_error.innerHTML = "Please fill your User Name";
        name_error.style.color = "red"
        name_error.style.display = "block";
        username.focus();
        return false;
    }
    if (userPassword.value.length < 8) {
        userPassword.style.border = "1px solid red";
        password_error.innerHTML = "Please double-check your password ";
        password_error.style.color = "red";
        password_error.style.display = "block";
        userPassword.focus();
        return false;
    }
    
}

function name_Verify() {
    if (username.value.length >= 6) {
        username.style.border = "1px solid black";
        name_error.style.display = "none";
        return true;
    }
}

function pass_Verify() {
    if (userPassword.value.length >= 8) {
        userPassword.style.border = "1px solid black";
        password_error.style.display = "none";
        return true;
    }
}

// validation for sign up page
let fname = document.forms['reg_form']['fname'];
let lname = document.forms['reg_form']['lname'];
let email = document.forms['reg_form']['email'];
let uname = document.forms['reg_form']['uname'];
let upass = document.forms['reg_form']['upass'];

let fname_error = document.getElementById("fname_error");
let lname_error = document.getElementById("lname_error");
let email_error = document.getElementById("email_error");
let uname_error = document.getElementById("uname_error");
let upass_error = document.getElementById("upass_error");

fname.addEventListener('textInput', fname_Verify);
lname.addEventListener('textInput', lname_Verify);
email.addEventListener('textInput', email_Verify);
uname.addEventListener('textInput', uname_Verify);
upass.addEventListener('textInput', upass_Verify);

function validateSign() {
    if (fname.value.length < 4) {
        fname.style.border = "1px solid red";
        fname_error.innerHTML = "Please fill First Name";
        fname_error.style.color = "red";
        fname_error.style.display = "block";
        fname.focus();
        return false;
    }

    if (lname.value.length < 4) {
        lname.style.border = "1px solid red";
        lname_error.innerHTML = "Please fill Last Name";
        lname_error.style.color = "red";
        lname_error.style.display = "block";
        lname.focus();
        return false;
    }

    if (email.value.length < 4) {
        email.style.border = "1px solid red";
        email_error.innerHTML = "Please fill Email";
        email_error.style.color = "red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if (uname.value.length < 6) {
        uname.style.border = "1px solid red";
        uname_error.innerHTML = "Please fill User Name";
        uname_error.style.color = "red";
        uname_error.style.display = "block";
        uname.focus();
        return false;
    }

    if (upass.value.length < 6) {
        upass.style.border = "1px solid red";
        upass_error.innerHTML = "Please fill Password";
        upass_error.style.color = "red";
        upass_error.style.display = "block";
        upass.focus();
        return false;
    }
}

function fname_Verify() {
    if (fname.value.length >= 4) {
        fname.style.border = "1px solid black";
        fname_error.style.display = "none";
        return true;
    }
}

function lname_Verify() {
    if (lname.value.length >= 4) {
        lname.style.border = "1px solid black";
        lname_error.style.display = "none";
        return true;
    }
}

function email_Verify() {
    if (email.value.length >= 4) {
        email.style.border = "1px solid black";
        email_error.style.display = "none";
        return true;
    }
}

function uname_Verify() {
    if (uname.value.length >= 6) {
        uname.style.border = "1px solid black";
        uname_error.style.display = "none";
        return true;
    }
}

function upass_Verify() {
    if (upass.value.length >= 6) {
        upass.style.border = "1px solid black";
        upass_error.style.display = "none";
        return true;
    }
}
