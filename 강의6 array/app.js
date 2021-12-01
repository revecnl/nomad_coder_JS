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
