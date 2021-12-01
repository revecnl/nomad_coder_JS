//const loginform = document. getElementsByClassName("login-form");
//const logininput = loginform.querySelector("input");
//const loginbutton = loginform.querySelector("button");
const loginform = document.querySelector(".login-form");
const logininput = document.querySelector(".login-form input");
const link = document.querySelector("a")

function onLoginSubmit(event){
   event.preventDefault();
    console.log(logininput.value);
//    if(username===""){
//        alert("Please write your name.")
//    } else if(username.length > 15){
//    alert("your name is too long")
//    }
}
function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("click");
}

loginform.addEventListener("submit", onLoginSubmit)
link.addEventListener("click", handleLinkClick)
//브라우저 기본기능 멈추기
//addevecntliostner 안에 있는 함수는 직접 실행하지 않는다
