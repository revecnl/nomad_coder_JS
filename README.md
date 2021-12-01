# 노마드 코더 JS 챌린지 대비 정리

**1) 데이터 타입**

1. 숫자 number/ 정수-interger 소수-float
2. 문자 string / "text" 'text' '1' "1"
3. 불리언 boolean / true or false


**2) 변수**

1. const 변하지 않는 상수
2. let 변경 가능 한 상수
3. var 언제든지 업데이트 가능한 싱수 / 언어적 보호 불가능
4. null 비어있음
5. undefined 변수에 값을 부여하지 않은 상태

**3) Array
//데이터 구조에 대한 정리
// array 나열

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dayOfWeek = [mon,tue,wed,thu,fri,sat,sun];
//const nonesense = [1,2,"text",true,false,null,undefined];
console.log(dayOfWeek);
//console.log(nonesense);

//array에서 첫번째는 0
console.log(dayOfWeek[5]);

//array기능 나열 추가 삭제

//추가
dayOfWeek.push("Week");
console.log(dayOfWeek);

