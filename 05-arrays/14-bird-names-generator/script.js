/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const birds = [
    { name: "mouette", fem: true },
    { name: "corbeau" },
    { name: "mésange", fem: true },
    { name: "hibou" },
    { name: "buse", fem: true },
    { name: "pigeon" },
    { name: "pie", fem: true },
    { name: "vautour" },
    { name: "faucon" },
    { name: "rouge-gorge" },
    { name: "tourterelle", fem: true },
    { name: "corneille", fem: true },
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
  ]);
  document.getElementById("run").addEventListener("click", function () {
    //let randomBirds = new Array();
    // Then create a for-loop, to generate and show bird names
    let randomBirdNr = Math.floor(Math.random() * birds.length);
    let randomBirds = birds[randomBirdNr].name;
    let list = Array.from(adjectives);
    let randomAdjectives = list[Math.floor(Math.random() * list.length)];
    let gender = birds[randomBirdNr].fem;

    if (gender) {
      document.getElementById("target").innerHTML =
        "La " + randomBirds + " " + randomAdjectives + "e";
    } else {
      document.getElementById("target").innerHTML =
        "Le " + randomBirds + " " + randomAdjectives;
    }
  });
})();

// IF male: “le “+ bird + adjective
// For example: le corbeau petit
// IF femaile : “la “+ bird + adjective+”e”
// For example: la mouette petite
