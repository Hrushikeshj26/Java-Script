// Find the Largest word in string

const words = "I Love JavaScript Programming"

function longestWord(str) {
  let word = "";
  let longest = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      if (word.length > longest.length) {
        longest = word;
      }
      word = "";
    } else {
      word += str[i];
    }
  }

  console.log(longest);
  
}

longestWord(words);


