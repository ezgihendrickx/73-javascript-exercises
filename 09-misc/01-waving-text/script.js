/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let tar = document.getElementById("target").innerHTML;
  let tarelement = document.getElementById("target");
  console.log(tar.length);
  //tarelement.style.fontSize = "5px";
  for (i = 0; i < tar.length; i++) {
    tarelement.charAt(i).style.fontSize = i + "px";
  }
})();

// "Woo-hoo!".fontsize(2) +
// "I'm making waves!".fontsize(3) +
// "Wéééé!".fontsize(4) +
// "Oh ...".fontsize(5) +
// "I think I'm having seasickness ...".fontsize(6);
//tar.style.fontSize = "15px";
