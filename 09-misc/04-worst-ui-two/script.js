/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  (function () {
    let buttonOne = document.getElementById("part-one");
    let buttonTwo = document.getElementById("part-two");
    let buttonThree = document.getElementById("part-three");
    let buttonFour = document.getElementById("part-four");
    let output = document.getElementById("target");

    //function to calculate the total phone number to show in "target"
    //just puts the strings next to each other
    let phoneNumber = function () {
      return (
        "+" +
        buttonOne.innerHTML +
        buttonTwo.innerHTML +
        buttonThree.innerHTML +
        buttonFour.innerHTML
      );
    };

    //when clicking the button, the button value is increased by 1
    //(IF smaller than the maximum value for the button (HTML))
    buttonOne.onclick = function () {
      if (buttonOne.innerHTML * 1 < buttonOne.getAttribute("data-max") * 1) {
        let newValue = buttonOne.innerHTML * 1 + 1; //increase the button value with 1
        if (newValue < 10) {
          newValue = "0" + newValue; // make sure "01" is displayed, not "1"
        }
        buttonOne.innerHTML = newValue; //display the new button value
        output.innerHTML = phoneNumber();
      } else {
        alert("Push another button"); //when the value becomes larger than the max value (00 -> 99)
      }
    };

    //Below 3 buttons exactly the same as the first one
    buttonTwo.onclick = function () {
      if (buttonTwo.innerHTML * 1 < buttonTwo.getAttribute("data-max") * 1) {
        let newValue = buttonTwo.innerHTML * 1 + 1;
        if (newValue < 10) {
          newValue = "0" + newValue;
        }
        buttonTwo.innerHTML = newValue;
        output.innerHTML = phoneNumber();
      } else {
        alert("Push another button");
      }
    };

    buttonThree.onclick = function () {
      if (
        buttonThree.innerHTML * 1 <
        buttonThree.getAttribute("data-max") * 1
      ) {
        let newValue = buttonThree.innerHTML * 1 + 1;
        if (newValue < 10) {
          newValue = "0" + newValue;
        }
        buttonThree.innerHTML = newValue;
        output.innerHTML = phoneNumber();
      } else {
        alert("Push another button");
      }
    };

    buttonFour.onclick = function () {
      if (buttonFour.innerHTML * 1 < buttonFour.getAttribute("data-max") * 1) {
        let newValue = buttonFour.innerHTML * 1 + 1;
        if (newValue < 10) {
          newValue = "0" + newValue;
        }
        buttonFour.innerHTML = newValue;
        output.innerHTML = phoneNumber();
      } else {
        alert("Push another button");
      }
    };

    console.log(phoneNumber);
  })();
})();
