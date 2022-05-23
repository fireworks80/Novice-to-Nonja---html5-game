const myGuess = Math.floor(Math.random() * 20) + 1;
let guesses = 0;
let guess;

while (guess !== myGuess) {
  guess = parseInt(prompt('What number am I thinking of?'), 10);

  if (!guess) break;

  guesses += 1;

  const result = guess < myGuess ? 'Higher' : guess > myGuess ? 'Lower' : '';

  if (result) alert(result);
}

alert(`Well done! You got it in ${guesses}`);
