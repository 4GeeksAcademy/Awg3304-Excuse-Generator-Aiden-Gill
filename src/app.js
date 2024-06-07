/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuse = document.getElementById("excuse");
  let who = ["Hulk", "Iron Man", "The Thing", "Spider-Man"];
  let action = ["demolished", "smashed", "broke", "disintegrated"];
  let what = ["my car", "my computer", "my house"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function getRandomInt(array) {
    return Math.floor(Math.random() * array.length);
  }
  excuse.innerHTML =
    who[getRandomInt(who)] +
    " " +
    action[getRandomInt(action)] +
    " " +
    what[getRandomInt(what)] +
    " " +
    when[getRandomInt(when)];
};
