const playerName= "JY";
const playerPoints=1221212;
const playerHandsome = true;
const playerFat = "little bit";

//array
const player=["JY", 121212, true, "little bit"];
console.log(player);

//object
const player2 = {
    Name:"JY",
    points:10,
    fat: true,
}

console.log(player2);
console.log(player2.Name);
console.log(player2["Name"]);

//업데이트 가능
//수정
player2.fat = false;
console.log(player2);
//추가
player2.lastName = "potato";
console.log(player2);
