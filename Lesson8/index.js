console.log("hello world!");

let y = 100;
const x = 15;
{
  let x = 10;

  console.log("x: ", x);

  console.log("y:", y);
}

console.log("x: ", x);

// câu lệnh if

const a = 11;

if (a === 10) {
  console.log("dúng");
} else {
  console.log("sai");
}

// => so sánh điệu kiện sẽ ra kết quả là boolean ( true || false)

const b = 100;
const c = 200;

if (c > b) {
  console.log("đúng");
} else if (c === b) {
  console.log("sai");
} else {
  console.log("sai");
}

let date = new Date();

let date1 = new Date().getDay();

let year = new Date().getFullYear();

console.log("date:", date);

console.log("date1:", date1);

console.log("year:", year);

let day; // let có thay đổi giá trị, const thì ko đổi giá trị

switch (date1) {
  case 1: {
    day = "Monday";
    break;
  }
  case 2: {
    day = "Tuesday";
    break;
  }
  case 3: {
    day = "Wednesday";
    break;
  }
  case 4: {
    day = "Thursday";
    break;
  }
  case 5: {
    day = "Friday";
    break;
  }

  case 6: {
    day = "Saturday";
    break;
  }

  case 0: {
    day = "Sunday";
    break;
  }

  default: {
    day = " Not A week";
  }
}

console.log("day:", day);
