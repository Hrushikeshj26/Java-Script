// Find the Most Frequent Element

const arr = [10, 20, 10, 30, 20, 10, 40, 20, 20];
const counts = {};

for (const number of arr) {
    
  if (counts[number] === undefined) {
    counts[number] = 1;
  } else {
    counts[number] = counts[number] + 1; 
  }
}

let mostFrequent = null;
let maxCount = 0;

for (const number in counts) {

  if (counts[number] > maxCount) {
    maxCount = counts[number];     
    mostFrequent = Number(number); 
  }
}

console.log("Most frequent number:", mostFrequent);
console.log("It appeared this many times:", maxCount);