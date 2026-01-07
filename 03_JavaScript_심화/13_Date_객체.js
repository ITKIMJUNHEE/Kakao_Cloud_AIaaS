// 날짜 생성
let now = new Date();
let specificDate1 = new Date('2023-12-25');
let specificDate2 = new Date(2023, 11, 25); // 12월
let dateFromTimestamp = new Date(1609459200000);
console.log(now, specificDate1);

// 날짜 가져오기 및 설정
console.log(now.getFullYear(), now.getMonth(), now.getDate());
now.setFullYear(2024);
console.log(now.toISOString(), now.toLocaleString());