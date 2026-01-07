// Number 메서드
let num = 12345.6789;
console.log(num.toExponential(1));
console.log(num.toFixed(2));
console.log(num.toPrecision(4));

// 정적 속성 및 사용자 정의 속성
class Test {}
Test.property = 123;
Test.method = function() { return "This is a method"; };
console.log(Test.property, Test.method());

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);