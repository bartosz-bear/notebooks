//const map = new Map()

//const map_array = [['key1', 'value1'], ['key2', 'value2']]
//const map = new Map(map_array)
const map = new Map([[0, 0], [1, 1]])
//map.set([0, 0], [1, 1])
/*
console.log(map.get(1));

function my_fun(x, y) {
  const fun_args = my_fun.arguments
  console.log(fun_args, my_fun.name)
  return fun_args
}

const a = my_fun(2)
*/

let test = [1,2,3];

function testing(x) {
  x.pop();
  return x;
}

console.log(test);
console.log(testing(test));
console.log(test);


/*
Array.prototype.myMax = function (callback) {
  return Math.max([])
}
*/

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

//console.log(Object.getPrototypeOf(myObject));

//const prot = Object.getPrototypeOf('ala');

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// my table

console.log('###')

let myArr = [];

for (let i = 0; i < 7; i++) {
  myArr.push([]);
}

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 15; j++) {
    myArr[i].push(0);
  }
}

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 15; j++) {
    if ( i > 0 && i < 6) {
      // mon to fri
      let rn = Math.random();
      if (rn <= 0.3399) {
        myArr[i][j] = 2;
      } else if (rn > 0.3399 && rn <= 0.67) {
        myArr[i][j] = 3;
      } else { myArr[i][j] = 4;}
    } else if (i === 6) {
      //sat
      let rn2 = Math.random();
      if (rn2 <= 0.5) {
        myArr[i][j] = 0;
      } else {
        let rn3 = Math.random();
        if (rn3 <= 0.5) {
          myArr[i][j] = 1;
        } else {
          myArr[i][j] = 2;
        }
      }
    }
  }
}


console.log(myArr);
console.log(myArr.length)