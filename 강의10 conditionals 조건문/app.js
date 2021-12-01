//복습
//prompt - 사용자에게 창을 띄울 수 있게 해준다. 자바스크립트는 동작을 멈춤
//그러므로 잘 쓰이지 않음, 메세지의 모양도 예쁘지 않고(css를 적용할 수 없음) 
//자바스크립트가 동작을 멈추기 때문에
const age = prompt("How old are you?")
//한 타입을 다른 타입으로 바꾸기
parseInt("15")

console.log(typeof "15", typeof parseInt("15"));
//parseInt() 문자에서 숫자로 바뀜 231312가능 dasadaqn불가능

//typeof #### - 타입을 확인할 수 있게 해줌

//isNaN() - bookean으로 알려줌
console.log(isNaN(age))


console.log(age, parseInt(age));
//숫자로 바꾸면 크기 비교를 할 수 있게됨


//condition-boolean
if(isNaN(age)){
    /// condition = true
    console.log("please write a number")
}else{
    console.log("thank you for writing your age")
}


