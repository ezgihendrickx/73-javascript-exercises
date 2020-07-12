/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // 1.4 //
  let age;
  let gender;
  let live;
  let response;

  do {
    age = prompt("What is your age?");
    gender = prompt("What is your gender?");
    live = prompt("Where do you live?");
    // if you select oke response = TRUE if you select cancel response = FALSE //
    response = confirm(
      " Your age is " +
        age +
        "\n" +
        " Your gender is " +
        gender +
        "\n" +
        " Your city is " +
        live
    );
    // To test value of response //
    console.log(response);
  } while (
    // Keep repeating as long as response is not (!) true//
    !response
  );
  console.log(response);
  alert("Thanks");
})();
