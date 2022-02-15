
document.getElementById("welcm").innerText = "welcome to java script"

const array = [3, 6, 2, 56, 32, 5, 89, 32, 101];
let largest = 0;

for (i = 0; i <= largest; i++) {
  if (array[i] > largest) {
    largest = array[i];
    //   console.log( largest);
  }
}
document.getElementById("s1").innerText = `${largest}  is the largest number of an array  `
console.log("the largest number of an array is", largest);


console.log("************ find largest number ************");
// or  largest number in an array 
let arr = [3, 6, 2, 56, 32, 5, 89, 32];
let large = arr.sort((a, b) => {
  return b - a;
})[0];
console.log("the largest number of an array is", large);



console.log("************ find second largest number ************");
// second largest number  
let secondarr = [3, 6, 2, 56, 32, 5, 89, 32];

let seconlarge = secondarr.sort((a, b) => b - a)[1];

console.log("the second largest number of an array is", seconlarge);



console.log("************ print random number using  function ************");
// random number using function  
function random() {
  let ram = document.getElementById("random").innerText = Math.floor(Math.random() * 1 + 2);
  console.log(ram);
}
document.getElementById("random").innerText = Math.floor(Math.random() * 10)



console.log("************  give me pattern like this  ************");
// loop the pattern 
function pattern() {
  var n = "*"
  for (var i = 1; i <= 4; i++) {
    console.log(n.repeat(i));
  }
}

console.log("************ find polindrum are not ************");
// polindrum 
var isPalindrome = function (entervalue) {
  if (entervalue == entervalue.split('').reverse().join('')) {
    console.log('is polinderr');
  } else {
    console.log('is not polinderr');
  }
};
isPalindrome("soos")



console.log("************ object iteration  ************");
// object iteration program  
const object = {
  a: 1,
  b: 2,
  c: 3
};
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


console.log("************ change the by dropdown ************");
//change the color by dropdown
function changeme(color) {
  document.body.style.background = color
}


//change color by taking input value
function changecol() {
  let co = document.getElementById('changecolorofcolor').value;
  document.body.style.backgroundColor = co;
  document.getElementById("changecolor").value = co
  document.body.style.color = "white"
}

console.log("************  store the even and odd in different array ************");
// store the array into even and odd in separate array
var h = [06, 03, 02, 13, 04, 05, 12, 07, 09, 01, 11, 22];
console.log('main array ', h);
o = [];
e = [];
for (var i = 0; i < h.length; ++i) {
  if (h[i] % 2 == 0) {
    e.push(h[i]);
  } else {
    o.push(h[i]);
  }
}
console.log('even number ', e);
console.log('odd number', o);


st = []
// take input
let inp = document.getElementById('inpu')
function valiinput() {
  if (!st.includes(inpu.value)) {
    st.push(inpu.value)
    console.log(st);
  }
}

console.log("*****convert the entire array into even number******");
//convert the array into the even
const arrr = [1, 25, 1, 36, 4, 7, 8, 69, 45]
newArr = arrr.map((value) => {
  if (value % 2 != 0) {
    return value + 1
  } else {
    return value
  }
})
console.log(newArr);

let con = arrr.indexOf(4)
console.log(con);


//print the perticular div or perticular section based on requirement

function print() {
  let printdiv = document.getElementById("lorems");
  let printarea = window.open();
  printarea.document.write(printdiv.innerHTML);
  printarea.document.close();
  printarea.focus();
  printarea.print();
  printarea.close();
}


console.log("****generate id  randomly *****");
//generate id by clicking 
function gen() {
  const jobs = ['DEV', 'TES', 'PRM', 'TCL']
  const job = Math.floor(Math.random() * jobs.length)
  let ran = Math.floor(Math.random() * 253)

  let nameId = document.getElementById("generateIds").value

  let nameValue = ''
  for (let i = 0; i < 3; i++) {
    nameValue += nameId[i]
  }
  document.getElementById("para").innerText = nameValue.toUpperCase() + "" + jobs[job] + ran

}

//print the full name
function pr() {
  document.getElementById("result").innerHTML = document.getElementById('fname').value + " " + document.getElementById('mname').value + " " + document.getElementById('lname').value;

}


//! filter the duplecates in an array by filter method
const arr2 = [1, 2, 2, 3, 3, 3, 3, 4, 4]
function fx(arr2) {
  return arr2.filter((va, ind) =>
    arr2.indexOf(va) == ind
  )
}
console.log("filtered array", fx(arr2));

console.log("************ find prime number ************");

// prime number
function primes(number) {
  let count = 0
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      count = count + 1

    }
  } if (count == 2) {
    console.log(`${number}:-- is prime number`);
  } else {
    console.log(`${number}:-- is not a prime number`);
  }
}
primes(16)

let numbers10 = [20, 20, 21, 1, 2, 3, 4, 8, 9, 27]
let resu = numbers10.filter(function (numbers10) {
  let count = 0

  for (i = 0; i <= numbers10; i++) {
    if (numbers10 % i == 0) {
      count = count + 1
      return count == 2
    }
  } if (count == 2) {

    return primesFind()
  }
  else {
    console.log('not prime');
  }

})

console.log("************ find factorial ************");
// find factorial
console.log('named functiom');
function fact(num) {
  fact = 1
  for (let i = 1; i <= num; i++) {    //here it execute from 1 to n
    fact = fact * i
  }
  console.log(fact);
}
fact(3)



console.log("*** fibonocci series*****");
// fibonocci series
function fiboSer1(num) {
  let a = 0;
  let b = 1;
  str = "";
  for (let i = 0; i < num; i++) {
    str += String(a);
    str += " ";
    c = a + b;
    a = b;
    b = c;
  }
  console.log(`for input ${num} the fibonoci series is ${str}`);
}
fiboSer1(3);


console.log("******** bubble sort******** ");
//bubble sort 
function bbsort1(bsArry) {
  for (let i = 0; i <= bsArry.length; i++) {
    for (let j = 0; j <= bsArry.length - i - 1; j++) {
      if (bsArry[j] > bsArry[j + 1]) {
        let temp = bsArry[j];
        bsArry[j] = bsArry[j + 1];
        bsArry[j + 1] = temp;
      }
    }
  }

  console.log(`the sorted array is ${bsArry}}`);
}
bbsort1([20, 3, 25, 6, 9, 8, 0, 53]);



console.log("*****object destructruing*****");
const person = {
  firstName: 'srinivas',
  lastName: 'k',
  age: 10,
  hobbies: ['cricket', 'singing'],
  address: {
    state: 'karnataka',
    pincode: 573111,
    city: 'chikkarasanahalli'
  }
}
const { firstName, lastName } = person
console.log('first name', firstName);
console.log('last name', lastName);
//multiple level
const { hobbies, address: { state, city } } = person
console.log('hobbiess', hobbies);
console.log('state', state);
console.log('city', city);


console.log('--------------array destructuring-----------------');

const fruits = ['applel', 'pine apple', 'orange', 'banana']
const [fruits1, fruits2] = fruits
console.log(fruits1);
console.log(fruits2);

console.log('********** for in loop ***********');
var persons = {
  firstName: 'srinivas', // loop through an object
  lastName: 'c r',
  age: 22,
  gender: 'male'
}
for (var mykey in persons) {
  console.log(`${mykey}:-${persons[mykey]}`);
}


console.log("****for of loop****"); 
var myFruits=['apple','pine Apple','kashmir Apple','mango']
for (var fruitsz of myFruits){
    console.log(fruitsz);
}




  let filArr = arr2.filter((va) => {
    if (arr2.indexOf(va) == va) {
      console.log(va);

    }
  })


  // 
  const arr3 = [1, 2, 2, 3, 3, 3, 3, 4, 4]
  arr3.stri

  for (let r of arr3) {
    let fu = `${r},${arr2[r]}`
  }

  // get value when we click the button
  function getvalue() {
    let gets = "srinivas c r"
    document.getElementById("getvalue").value = gets
  }

  const convObj = [1, 2, 2, 3, 3, 3, 3, 4, 4]
  let reobj = Object.assign({}, convObj)// Array is convert to object
  console.log(reobj);
  let jobj = JSON.stringify(reobj)
  console.log(jobj)

