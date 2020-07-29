/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  //retrieve all ID's and give them a name

  //makes it easier to use later

  let inputOne = document.getElementById("part-one");

  let inputTwo = document.getElementById("part-two");

  let inputThree = document.getElementById("part-three");

  let inputFour = document.getElementById("part-four");

  let buttonOne = document.getElementById("fix-part-one");

  let buttonTwo = document.getElementById("fix-part-two");

  let buttonThree = document.getElementById("fix-part-three");

  let buttonFour = document.getElementById("fix-part-four");

  let output = document.getElementById("target");

  //phoneNumber = all 4 input fields next to each other

  let phoneNumber = function () {
    return (
      "+" +
      inputOne.getAttribute("value") +
      inputTwo.getAttribute("value") +
      inputThree.getAttribute("value") +
      inputFour.getAttribute("value")
    );
  };

  //when clicking on the first button, function is started

  //chooses random number between "data-min" and "data-max" attributes of the HTML input field

  buttonOne.onclick = function () {
    let randomNumber =
      Math.floor(
        Math.random() *
          (inputOne.getAttribute("data-max") * 1 -
            inputOne.getAttribute("data-min") * 1 +
            1)
      ) +
      inputOne.getAttribute("data-min") * 1;

    //set "value" attribute of the input field to the new random number

    inputOne.setAttribute("value", randomNumber);

    //change also "target" fields, to show the new full number

    output.innerHTML = phoneNumber();
  };

  //same for button two

  buttonTwo.onclick = function () {
    let randomNumber =
      Math.floor(
        Math.random() *
          (inputTwo.getAttribute("data-max") * 1 -
            inputTwo.getAttribute("data-min") * 1 +
            1)
      ) +
      inputTwo.getAttribute("data-min") * 1;

    if (randomNumber < 10) {
      randomNumber = "0" + randomNumber;
    }

    inputTwo.setAttribute("value", randomNumber);

    output.innerHTML = phoneNumber();
  };

  buttonThree.onclick = function () {
    let randomNumber =
      Math.floor(
        Math.random() *
          (inputThree.getAttribute("data-max") * 1 -
            inputThree.getAttribute("data-min") * 1 +
            1)
      ) +
      inputThree.getAttribute("data-min") * 1;

    if (randomNumber < 10) {
      randomNumber = "0" + randomNumber;
    }

    inputThree.setAttribute("value", randomNumber);

    output.innerHTML = phoneNumber();
  };

  buttonFour.onclick = function () {
    let randomNumber =
      Math.floor(
        Math.random() *
          (inputFour.getAttribute("data-max") * 1 -
            inputFour.getAttribute("data-min") * 1 +
            1)
      ) +
      inputFour.getAttribute("data-min") * 1;

    if (randomNumber < 10) {
      randomNumber = "0" + randomNumber;
    }

    inputFour.setAttribute("value", randomNumber);

    output.innerHTML = phoneNumber();
  };
})();
