// Find the First Non-Repeating Character

const text = "developer";
const counts = {};

for (const char of text) {
  if (counts[char] === undefined) {
    counts[char] = 1;
  } else {
    counts[char] = counts[char] + 1; 
  }
}

let firstUnique = null;

for (const char of text) {
  if (counts[char] === 1) {
    firstUnique = char;
    break;
  }
}

console.log("First non-repeating character:", firstUnique);