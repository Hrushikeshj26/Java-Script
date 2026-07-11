//log arr elements which are not dubblicated

const arr = [100, 50, 46, 30, 50, 70, 100, 10];
const counts = {};

for (const number of arr) {
  if (counts[number] === undefined) {
    counts[number] = 1;
  } else {
    counts[number] = counts[number] + 1;
  }
}

for (const number of arr) {
  if (counts[number] === 1) {
    console.log(number);
  }
}

// using normal for loop 

for( let i=0; i<arr.length; i++){
    let number = arr[i];
    if( counts[number] === undefined){
        counts[number] = 1;
    }else{
        counts[number] = counts[number] + 1;
    }
}

for( let i=0; i<arr.length; i++){
    let number = arr[i];
    if(counts[number] === 1){
        console.log(number);
    }
}


console.log(counts);

