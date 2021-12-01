//const loginform = document. getElementsByClassName("login-form");
//const logininput = loginform.querySelector("input");
//const loginbutton = loginform.querySelector("button");

const logininput = document.querySelector(".login-form input");
const loginbutton = document.querySelector(".login-form button");

function onLoginBtnClick(){
    console.log(logininput.value);
}

loginbutton.addEventListener("click",onLoginBtnClick);