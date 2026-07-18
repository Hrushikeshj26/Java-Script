//Summing Numbers using recursion

function countdown(number) {
  // 1. The Stopping Point (Base Case)
  if (number === 0) {
    console.log("Done!");
    return; // This stops the function from running again
  }

  // 2. The Action
  console.log(number);
  
  // The function calls ITSELF, but with a smaller number (opening a smaller box)
  countdown(number - 1);
}

// Let's start the countdown at 3
countdown(3);