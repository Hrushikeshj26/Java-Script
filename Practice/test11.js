//pattern printing..

let n = 8;


for ( let i = 1; i <= n; i++){
    let pattern = '';
    for(let j=1; j <= i; j++){
        pattern += ' *'
    }
    console.log(pattern);
    
}

for ( let i = n; i >= 1; i--){
    let pattern = '';
    for(let j=1; j <= i; j++){
        pattern += ' *'
    }
    console.log(pattern);
    
}

for( let i = 1; i <= 8; i++){
    let pattern = '';
    for(j=1; j<=i; j++){
        pattern += j;
    }
    console.log(pattern);
    
}
