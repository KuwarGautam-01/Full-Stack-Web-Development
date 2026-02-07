// question 1

// let num = 2;
// let arr = [1,2,3,4,5,6,2,3];

// for(let i=0 ; i<arr.length ; i++) {
//     if(arr[i] == num) {
//         arr.splice(i,1);
//     }
// }

// console.log(arr);


// question 2

// let number = 287152;
// let copy = number;

// let count = 0;

// while(copy > 0) {
//     count++;
//     copy = Math.floor(copy / 10);
// }

// console.log(count);


// question 3

// let number = 287152;
// let copy = number;
// let digSum = 0;

// while(copy > 0){
//     let ld = Math.floor(copy % 10);
//     digSum += ld;
//     copy /= 10;
// }

// console.log(digSum);


// question 4

// let n = prompt("Enter number :");
// let fact = 1;

// for(let i=1 ; i<=n ; i++){
//     fact *= i;
// }

// console.log(`factorial of ${n} is : ${fact}`);


// question 5

let array = [2,3,1,5,6,12,8,14,7];

let largest = -1;

for(num of array) {
    if(largest < num) {
        largest = num;
    }
}

console.log(largest);