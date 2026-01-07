console.log("--- 10-1. 함수의 정의와 호출 ---");
// greet 함수 정의: 하나의 매개변수 name을 받아 인사 메시지 반환
function greet(name) {
    return "Hello, " + name + "!";
}

// 함수 호출
console.log(greet("John")); // "Hello, John!" 출력


console.log("--- 10-2. 함수도 '값'이다  ---");
// 자바스크립트에서 함수는 변수에 할당 가능한 값으로 취급됨
let message = greet("Alice");
console.log(message); // "Hello, Alice!"


console.log("--- 10-3. 매개변수와 인수 ---");
// add 함수: 두 개의 매개변 a와 b를 받아 합을 반환 (화살표 함수 형태)
const add = (a, b) => {
    return a + b;
};

// 호출 시 3과 5가 인수로 전달되어 8이 출력됨
let sum = add(3, 5);
console.log(sum); // 8 출력


console.log("--- 10-4. 화살표 함수 예제 ---");
// 화살표 함수로 정의된 greet 함수
const greetArrow = (name) => {
    return "Hello, " + name + "!";
};
console.log(greetArrow("Bob")); // "Hello, Bob" 출력


console.log("--- 10-5. 화살표 함수의 축약형 ---");
// 본문이 한 줄일 때 {}와 return 생략 가능, 매개변수가 하나면 () 생략 가능
const greetShort = name => "Hello, " + name + "!";

console.log(greetShort("Charlie")); // "Hello, Charlie" 출력