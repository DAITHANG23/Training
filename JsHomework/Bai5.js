// ### Bài 5 Số hoàn hảo. Số hoàn hảo là số mà tổng các ước của nó bằng chính nó (trừ chính nó). Viết chương trình nhập vào 1 số và kiểm tra xem đó có phải số hoàn hảo hay không?

function isPerfectNumber() {
  let sum = 0;
  for (let i = 1; i < 100; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        sum = sum + j;
      }
    }
    if (sum === i) {
      return i;
    } else continue;
  }
}

console.log(isPerfectNumber());
// console.log(isPerfectNumber(10));
// console.log(isPerfectNumber(28));
// console.log(isPerfectNumber(496));
