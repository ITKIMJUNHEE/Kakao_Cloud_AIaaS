// Symbol 생성
const mySymbol = Symbol("description");
const anotherSymbol = Symbol("description");
console.log(mySymbol === anotherSymbol); // false (유일무이함)

// 객체 키로 Symbol 사용
const obj = {
  [mySymbol]: "이것은 심볼 값입니다."
};
console.log(obj[mySymbol]);

// 이터러블과 for...of
const arr = [10, 20, 30];
for (const value of arr) {
  console.log("배열 순회:", value);
}

// 제너레이터 함수
function* countGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const counter = countGenerator();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3