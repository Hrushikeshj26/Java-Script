
const arr = [2, 8, 5, 9, 63, 45, 86]

num1 = 63;

result = arr.findIndex( (num) => num == num1)
result2 = arr.filter( (num) => num == num1 )

console.log(`Your index of number is ${result}`);
console.log(`Your index number is ${result2}`);