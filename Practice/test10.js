let num = 1234;

// Sum of given digit....
function sumOfDigit(number){

    let str = number.toString();
    sum = 0;

    for( let i=0; i<str.length; i++){
        sum += parseInt(str[i], 10);
    }

    return sum;
}
console.log(sumOfDigit(num));

// ..................................................................

// Count Digits.....

function countDigit(number){

    let str = number.toString();
    return str.length;
}

console.log(countDigit(num));

//...................................................................

// Reverse a Number.......
 function reverseNum(number){

    let str = number.toString();
    reverseNumber = '';

    for(i=str.length -1; i >= 0; i--){
        reverseNumber += parseInt(str[i], 10)
    }

    return reverseNumber;

 }
 console.log(reverseNum(num));
 