/* Bài 6 `homework`

Right-angled triangle

Nhập vào một số n và in ra màn hình theo định dạng sau:*/

function rightAngledTriangle(num) {
  for (let i = 0; i <= num; i++) {
    //Vòng lặp j để vẽ số in ra số lượng * cần thiết ở mỗi hàng

    console.log("i: ", i);
    for (let j = num - i; j < num; j++) {
      document.write("* ");
      console.log("j: ", j);
      //In ra các ký tự * tạo nên hình tam giác
    }
    document.write("<br >");
  }
}

rightAngledTriangle(4);

//
