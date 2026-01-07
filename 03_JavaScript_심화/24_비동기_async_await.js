// 데이터를 가져오는 가짜 비동기 함수
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("서버에서 온 데이터");
    }, 2000);
  });
}

// async / await 사용 (동기 코드처럼 읽힘)
async function processData() {
  try {
    console.log("데이터 요청 중...");
    const result = await fetchData(); // 완료될 때까지 대기
    console.log("받은 데이터:", result);
  } catch (error) {
    console.error("비동기 처리 중 에러:", error);
  }
}

processData();