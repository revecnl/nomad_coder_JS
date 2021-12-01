const calc = {
    plus: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    times: function(a, b){
        console.log(a*b);
    },
    divide: function(a, b){
    console.log(a/b);
    },
    power: function(a, b){
        console.log(a**b);
    },
};

calc.plus(2,4);
calc.minus(2,4);
calc.divide(2,4);
calc.times(2,4);
calc.power(2,4);

//console.log 없이만들기 function이 계산의 결과를 제공하게 만들자
//function 안에서 무언가 Return하면 function을 실행할때 값을 대체한다

const age = 96;
function calculatekrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
const KrAge = calculatekrAge(age);
console.log(KrAge);
//calculatekrAge(age);를 실행하면 calculatekrAge(age)의 (age)부분을 
//const age = 96 의 96이 대입된다

const calc2 = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    times: function(a, b){
        return a*b;
    },
    divide: function(a, b){
    return a/b;
    },
    power: function(a, b){
        return a**b;
    },
};

calc2.plus(2,4);
calc2.minus(2,4);
calc2.divide(2,4);
calc2.times(2,4);
calc2.power(2,4);//아무것도 안보임

const plusResult = calc2.plus(2,3);
const minusResult = calc2.minus(plusResult, 10);
const timesResult = calc2.times(10, minusResult);
const divideResult = calc2.divide(timesResult, plusResult);
const powerResult = calc2.power(divideResult, minusResult);