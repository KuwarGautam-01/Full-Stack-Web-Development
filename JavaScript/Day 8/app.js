// question 1

// let arr = [1,2,3,4,5];

// const square = arr.map((num) => num * num);

// console.log(`square is ${square}`);

// const sum = arr.reduce((res , num) => res+num , 0);

// console.log(`sum is ${sum}`);

// const avg = sum/arr.length;

// console.log(`Average is ${avg}`);


// question 2

// let arr = [1,2,3,4,5];

// const newArr = arr.map((num) => num+5);

// console.log(newArr);


// question 3

// let strArr = ["gautam" , "jyoti"];

// const newArr = strArr.map((el) => el.toUpperCase());

// console.log(newArr);


// question 4

// const doubleAndReturnArgs = (array , ...args) => [
//     ...array , 
//     ...args.map((v) => v*2),
// ];

// console.log(doubleAndReturnArgs([1,2,3,4,5] , 4 ,5));



// question 5


const mergeObjects = (obj1 , obj2) => ({...obj1 , ...obj2});

console.log(mergeObjects({ name : "Jyoti" , age : 48} , {city : "NDB" , country : "India"}));
