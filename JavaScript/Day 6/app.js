// question 1

// let num = 12;

// let array = [2,12,13,14,15,17,22,69,31];

// function largerThanNum(array , num) {
//     for(n of array) {
//         if(n > num) {
//             console.log(n);
//         }
//     }
// }

// largerThanNum(array, num);


// question 2

// let str = "abcdabcdefgggh";

// function extractUnique(str) {
//     let ans = "";

//     for(let i=0 ; i<str.length ; i++) {
//         let currChar = str[i];

//         if(ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }

//     console.log(ans);
// }

// extractUnique(str);


// question 3

// let country = ["Australia" , "Germany" , "United States Of America"];

// function longestCountry(country) {
//     let largest = -1;
//     let idx = -1;

//     for(let i=0 ; i<country.length ; i++) {
//         if(largest < country[i].length) {
//             largest = country[i].length;
//             idx = i;
//         }
//     }

//     console.log(country[idx]);
// }

// longestCountry(country);


// question 4

// let str = "gautam kuwar";

// let count = 0;

// function countVowels(str) {

//     for(let i=0 ; i<str.length ; i++) {
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//             count++;
//         }
//     }

//     console.log(count);
// }

// countVowels(str);


// question 5

let start = 5;
let end = 25;

function generateRandom(start , end) {

    let diff = end - start;
    let rand = Math.floor(Math.random() * diff) + start;

    console.log(rand);
}

generateRandom(start , end);

