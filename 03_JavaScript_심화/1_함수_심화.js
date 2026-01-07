// 함수의 할당
const greet = function(name) { return "안녕하세요, " + name + "님!"; };
console.log(greet("홍길동"));

function originGreet(name) { return "안녕하세요, " + name + "님!"; }
const greetAgain = originGreet;
console.log(greetAgain("이순신"));

// 객체의 속성으로 할당
const person = {
  name: "이순신",
  position: "장군",
  greet: function() { return "안녕하세요, " + this.name + " " + this.position + "님!"; }
};
console.log(person.greet());

// 배열의 요소로 할당
const functions = [
  function(name) { return "안녕하세요, " + name + "님!"; },
  function(name) { return "반갑습니다, " + name + "님!"; }
];
console.log(functions[0]("홍길동"));
console.log(functions[1]("이순신"));

// 콜백 함수
function greetCallback(name) { return "안녕하세요, " + name + "님!"; }
function processUserInput(callback) {
  const name = "홍길동";
  console.log(callback(name));
}
processUserInput(greetCallback);

// 고차 함수 테스트
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function isOdd(number) { return !!(number % 2); }
function isPositive(number) { return number > 0; }
function calcAndEval(calc, predicate, x, y) { return eval(calc(x, y)); }
console.log(calcAndEval(add, isOdd, 3, 9));
console.log(calcAndEval(subtract, isPositive, 3, 9));
console.log(calcAndEval(multiply, isOdd, 3, 9));

// 결과값으로 반환
function createGreeting(greeting) {
  return function(name) { return greeting + ", " + name + "님!"; };
}
const sayHello = createGreeting("안녕하세요");
console.log(sayHello("홍길동"));

// 매개변수와 arguments
function addParams(x, y) { return x + y; }
console.log(addParams(2, 4, 6, 8));

function addDefault(x = 1, y = 3) { return x + y; }
console.log(addDefault(), addDefault(2));

function addArgs() { console.log(arguments); return arguments[0] + arguments[1]; }
console.log(addArgs(2, 4, 6, 8));

function getAverage() {
  let result = 0;
  for (const num of arguments) { result += num; }
  return result / arguments.length;
}
console.log(getAverage(50, 60, 70, 80, 90));

// 중첩 함수
function outerFunction() {
  let functionName = "외부 함수";
  console.log(functionName + " 입니다.");
  function innerFunction() {
    let functionName = "내부 함수";
    console.log(functionName + " 입니다.");
  }
  innerFunction();
}
outerFunction();

// 재귀 함수
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}
console.log(sum(5));