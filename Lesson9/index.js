const country = ["VietNam", "China", "Thailand"];

console.log("country:", country[2]);
console.log("country:", country);

country[0] = 9;

console.log("country:", country);

//Javascript

const bien = ["abc", null, 2, true];

//Typescript const bien : (string,null,number,boolean)= ["abc",null,2,true]

const numberArray = [10, 20, 30, 40, 50]; //Tính tổng số trong mảng
let sum = 0;

for (let i = 0; i < numberArray.length; i++) {
  sum = sum + numberArray[i];
  console.log("sum:", sum);
}

numberArray.push(60); // note
console.log("numberArray:", numberArray);

numberArray.pop();

console.log("numberArray:", numberArray);

const newArray = [70, 80, 90, 100];

const array = numberArray.concat(newArray); //note

console.log("array:", array);

array.shift();

console.log("array:", array);

const number = array.map((item) => {
  return item * 2;
});
console.log(number);

const userList = [
  {
    name: "thang",
    age: "26",
    id: 1,
  },
  {
    name: "asdasd",
    age: "27",
    id: 2,
  },
];

const userName1 = userList[1].name;

console.log("name:", userName1);

const userItem = userList.map((user) => {
  return console.log(
    "name:" + user.name + " age:" + user.age + " id:" + user.id
  );
});

const user = {
  name: "thang",
  age: "26",
  id: 1,
  score: {
    toan: "9",
    vatly: "10",
    hoa: "5",
  },
};

const userName = user.name;
console.log("name:", userName);

user.class = "lớp 6";
console.log("user:", user);

const toan = user.score.toan;
console.log("toan:", toan);

function tinhToanCong(a, b) {
  return a + b;
}

const tinhCong = (a, b) => {
  return a + b;
};

const ketqua = tinhToanCong(2, 0);
const ketqua1 = tinhCong(2, 3);
console.log("ketqua:", ketqua);
console.log("ketqua:", ketqua1);
