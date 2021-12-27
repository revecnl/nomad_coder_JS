
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";//일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용.


function onLoginSubmit(event) {
  event.preventDefault();//js기본기능 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  console.log(username)
  //greeting.innerText = "Hello " + username;
  //string을 합치는 방법1
  greeting.innerText = `Hello ${username}`;
  //string을 합치는 방법2 따옴표 아니고 ~ 밑에꺼


  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
//addEventListener 안에 있는 함수는 직접 실행하지 않는다.