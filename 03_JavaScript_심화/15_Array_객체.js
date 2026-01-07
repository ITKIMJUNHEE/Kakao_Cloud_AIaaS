// 배열 생성 및 기본 조작
let fruits = ["Apple", "Banana"];
fruits.push("Cherry", "Date");
let last = fruits.pop();
console.log(fruits, last);

// splice
fruits.splice(1, 0, "Fig", "Grape");
fruits.splice(2, 2, "Honeydew");
console.log(fruits);

// 검색 및 변형
console.log(fruits.includes("Banana"), fruits.indexOf("Apple"));
console.log(fruits.sort().reverse().join(', '));

// 고차 함수
let numbersArr = [1, 2, 3, 4, 5];
numbersArr.forEach(num => console.log(num * 2));
let mapped = numbersArr.map(num => num * 2);
let filtered = numbersArr.filter(num => num % 2 === 0);
console.log(mapped, filtered);