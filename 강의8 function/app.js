//function 사용자가 반복적으로 사용할 수 있는 코드조각
//argument 함수가 실행되는 동안 어떤 정보를 함수에 보낼 수 있는 방법
function sayHello(){
    //이 안에 작성되는 코드는 sayHello가 작동할 때 마다 작동함
    console.log("Hello");
}

sayHello();

function sayHello(NameOfPerson, age){
    //()안에 받을 데이터를 넣음
    console.log("Hello my name is " + NameOfPerson + " and I am " + age);
}

sayHello("jy", 10);
sayHello("aa", 20);
sayHello("bb", 30);


//계산기
function plus(firstNumber,secondNumber){
    console.log(firstNumber + secondNumber);
}
function divide(a, b){
    console.log(a / b);
}
plus(8, 60);
divide(100, 5);

//
const player = {
    name:"JY",
    sayHi: function(othername){
        console.log("hi " + othername + " nice to meet you");
    }
};

console.log(player.name);
player.sayHi("JY")