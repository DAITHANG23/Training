// ### Bài 3 Viết chương trình in ra màn hình các số chia hết cho 5 trong khoảng từ 5 đến 70

function chiaHetCho5() {
  for (let i = 100; i >= 0; i--) {
    if (i % 5 === 0) {
      console.log(i);
    } else {
      continue;
    }
  }
}

chiaHetCho5();
