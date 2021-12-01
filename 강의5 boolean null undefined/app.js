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

//const = 상수 변치않음
//let = 변경가능 업데이트가능


let myName2 = "JY";
console.log("Hello "+ myName2);
myName2 = "jinyoung";
console.log("Your name is " + myName2);

//boolean
//true false
//null = nothing in there - 자연발생하지않음 
//변수값에 존재하지 않는다고 알려줄때 사용
//undefined = 변수는 존재하나 정의되지 않음 
let amIfat = true;
console.log(amIfat);

amIfat = null;
console.log(amIfat);

