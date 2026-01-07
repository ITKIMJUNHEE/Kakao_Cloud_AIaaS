// 렉시컬 스코프: 선언된 시점에 상위 스코프 결정
const x = 1;
function outer() {
  const x = 10;
  inner();
}
function inner() {
  console.log("렉시컬 스코프 x:", x); // 1 출력 (글로벌 x)
}
outer();

// 클로저: 외부 함수가 끝나도 내부 함수가 변수를 기억함
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3