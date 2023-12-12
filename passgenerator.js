const passwordBox = document.getElementById('password');
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbol = "@!#$%^&*()_[]{}+-/~'=";
const allChars = uppercase + lowercase + numbers + symbol;

function createPassword(){
    let password = " ";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}