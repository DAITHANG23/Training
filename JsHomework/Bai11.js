// Cho mảng một chiều bao gồm các số nguyên, hãy viết hàm tính các số chẵn trong mảng

function sumOfEvenNumbers(array) {
  let sum = 0;
  if (array.length === 0) {
    return (sum = "mảng rỗng"); //JS dc phép truyền bất kì type nhưng TS phải đúng type
  } else {
    for (let i = 0; i <= array.length; i++) {
      if (array[i] % 2 === 0) {
        sum = sum + array[i];
      } else continue;
    }
  }

  return sum;
}
console.log(sumOfEvenNumbers([]));
console.log(sumOfEvenNumbers([-1, 1, 2]));
console.log(sumOfEvenNumbers([0, 9, 2, 8, 10, -6, 100]));
