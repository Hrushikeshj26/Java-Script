// Find Dublicate values....

const array = [1, 2, 3, 2, 4, 5, 4, 5];
const seen = {};
const duplicates = [];

for (let i = 0; i < array.length; i++) {
  const item = array[i];
  
  if (seen[item]) {
    // Check if already added to duplicates to avoid repeats
    if (!duplicates.includes(item)) {
      duplicates.push(item);
    }
  } else {
    seen[item] = true;
  }
}

console.log(duplicates);
