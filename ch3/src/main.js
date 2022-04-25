const myGuess = Math.floor(Math.random() * 20) + 1;
let guesses = 0;
let guess;

while(guess !== myGuess) {
  debugger;
  guess = parseInt(prompt('What number am i think of'), 10);
  guesses += 1;

  alert(guess < myGuess ? 'higher' : 'lower');

}

alert(`Well done! You got it in ${guesses}!`);