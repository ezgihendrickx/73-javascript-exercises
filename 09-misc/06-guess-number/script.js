/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // function which runs when page is loaded

  // defines the variables, sets the random number X, and starts the guessGame function

  window.onload = function () {
    let count = 0;

    let X = Math.floor(Math.random() * 100 + 1);

    let answer;

    guessGame(count, X, answer);
  };

  //guessGame function

  //prompts for a guess, returns a different answer depending on the guess.

  //after every guess, it starts again the same function, until the correct answer is found

  let guessGame = function (count, X, answer) {
    if (count == 0) {
      //for the first guess

      answer = prompt("What is your guess?");

      count++;

      guessGame(count, X, answer);
    } else if (answer == X) {
      //when the guess is correct

      alert("You needed " + count + " guesses");
    } else if (answer < X) {
      answer = prompt("Higher");

      count++;

      guessGame(count, X, answer);
    } else if (answer > X) {
      answer = prompt("Lower");

      count++;

      guessGame(count, X, answer);
    } else {
      answer = prompt("You can only fill in a number. Try again");
    }
  };
})();
