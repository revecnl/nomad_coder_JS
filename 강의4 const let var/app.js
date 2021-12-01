console.log(545252);
// ()안에 숫자나 "문자" 삽입가능
console.log(5+2);
console.log(5*2);
console.log(5/2);
// 자바스크립트는 위에서 아래로 코드를 읽음
// 변수적용 띄어쓰기 못함 공백이 필요하면 첫글자에 대문자를 씀

const a = 5;
console.log(a+2);
console.log(a*2);
console.log(a/2);

let b = 5;
const c = 2;
console.log(b+c);
console.log(b*c);
console.log(b/c);

const myName = "JY";
console.log("Hello "+ myName);

//const = 상수 변치않음-가끔은 절대 변하면 안되는 변수도 있음
//let = 변경가능 업데이트가능
//var = 언제든 업데이트가능 언어적 보호 불가능
let myName = "JY";
console.log("Hello "+ myName);
myName = "jinyoung";
console.log("Your new name is " + myName);


