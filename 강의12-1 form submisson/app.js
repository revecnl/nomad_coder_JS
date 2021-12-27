//const loginform = document. getElementsByClassName("login-form");
//const logininput = loginform.querySelector("input");
//const loginbutton = loginform.querySelector("button");
const loginform = document.querySelector(".login-form");
const logininput = document.querySelector(".login-form input");
// const link = document.querySelector("a")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
   event.preventDefault();
   loginform.classList.add("HIDDEN_CLASSNAME");
   const username = logininput.value;
//    console.log(username);
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove("HIDDEN_CLASSNAME");
}
//    console.log(logininput.value);
//    if(username===""){
//        alert("Please write your name.")
//    } else if(username.length > 15){
//    alert("your name is too long")
//    }
// username이 15글자 넘어가면 경고, 선호하는 방식은 아님, 값의 유효성을 파악

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("click");
}

// loginform.addEventListener("submit", onLoginSubmit)
link.addEventListener("click", handleLinkClick)
//preventDefault 브라우저 기본기능 멈추기
//addevecntliostner 안에 있는 함수는 직접 실행하지 않는다
// submit은 새로고침 기능이 있다
// 함수에()가 있으면 해당기능을 바로 사용한다는 의미이다.
// 바로 실행되는걸 원치 않는다면 ()을 빼자
