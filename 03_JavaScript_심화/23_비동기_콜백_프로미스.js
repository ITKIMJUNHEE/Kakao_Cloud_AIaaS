// 1. 콜백 함수를 이용한 비동기
console.log("작업 시작");
setTimeout(() => {
  console.log("2초 후 콜백 실행");
}, 2000);
console.log("다음 코드 실행 (비동기)");

// 2. Promise (성공/실패 관리)
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("데이터 로드 성공!");
  } else {
    reject("데이터 로드 실패...");
  }
});

myPromise
  .then((data) => console.log("Promise 결과:", data))
  .catch((err) => console.log("에러 발생:", err));