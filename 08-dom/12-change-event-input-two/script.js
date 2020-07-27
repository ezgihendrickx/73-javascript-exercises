/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("pass-one").addEventListener("input", () => {
    if (
      document.getElementById("pass-one").value.length > 7 &&
      document.getElementById("pass-one").value.match(/\d\d/g)
      //   It’s a general function used in search engines like google etc.: to compare words/strings/numbers/symbols
      // \d  says it needs to contain a number
      // \w says it needs to contain letters I think
      // /g says that the whole password is searched, not just the first letter for example
    ) {
      document.getElementById("validity").innerHTML = "Ok";
    } else {
      document.getElementById("validity").innerHTML = "Not Ok";
    }
  });
})();
