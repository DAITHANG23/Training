// Viết một function, xóa một phần tử bất kì trong mảng

function remove(array, position) {
  array.splice(position, 2);
  return array;
}
// my_array = [10, -5];
arr1 = [1, 2, 3, 4, 5];
console.log(remove(arr1, 3));

// áp dụng vào chức năng remove thành viên...
