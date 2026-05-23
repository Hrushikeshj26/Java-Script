// Closures & Data Privacy


function createBankAccount(initialAmount) {
  // private variable
  let balance = initialAmount;
  
  return {
    deposit: function(amount) {
      if ( amount > 0 ) {
       return balance = balance + amount;
      } else {
        return 'Please Deposite Amount...';
      }
    },
    withdraw: function(amount) {
      if ( amount <= balance ) {
        return balance = balance - amount;
      }else{
        return "Insufficient funds";
      }
    },
    getBalance: function() {
      return  balance;
    }
  };
}

// Testing:
const myAccount = createBankAccount(500);

console.log(myAccount.getBalance()); // Output: 500
console.log(myAccount.deposit(200)); // Output: 700
console.log(myAccount.withdraw(100)); // Output: 600
console.log(myAccount.withdraw(1000)); // Output: "Insufficient funds"

// IMPORTANT TEST (Data Privacy):
console.log(myAccount.initialAmount); // Output: undefined