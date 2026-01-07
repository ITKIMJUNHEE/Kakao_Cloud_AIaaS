// 자바스크립트 객체
const user = {
  name: "홍길동",
  age: 25,
  hobbies: ["독서", "등산"],
  job: {
    title: "개발자",
    experience: "3년"
  }
};

// 1. 객체를 JSON 문자열로 변환 (직렬화)
const jsonString = JSON.stringify(user);
console.log("JSON 문자열:", jsonString);
console.log("타입:", typeof jsonString);

// 2. JSON 문자열을 객체로 변환 (역직렬화)
const parsedObject = JSON.parse(jsonString);
console.log("복원된 객체:", parsedObject);
console.log("이름 접근:", parsedObject.name);

// 주의: JSON 문자열은 반드시 큰따옴표("")를 사용해야 함
const rawJson = '{"name": "이순신", "age": 30}';
console.log(JSON.parse(rawJson));