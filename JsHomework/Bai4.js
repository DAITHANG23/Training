// ### Bài 4: Viết chương trình nhập vào số nguyên dương n. Và đếm xem n có bao nhiêu ước số

function uocSo(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log("ước số là:", i);
    }
  }
}

uocSo(10);
