/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Input Arrays
let whoArray = [];
let actionArray = [];
let whatArray = [];
let whenArray = [];

// Function to add input value to the array
function addItemToWho() {
  // Pulling the input value from HTML doc to the DOM
  let whoValue = document.getElementById("whoInput").value;
  // Pushing the value of whoValue into the whoArray
  whoArray.push(whoValue);
  // Creating a place for the whoValues to be shown
  let whoList = document.getElementById("whoList");

  // Clearing existing items
  whoList.innerHTML = "";

  // Loop through whoArray and add each item as a list item to get an index value
  whoArray.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    whoList.appendChild(li);
    console.log(whoArray);
  });
}

let addItemToWhoButton = document
  .getElementById("addItemToWhoButton")
  .addEventListener("click", addItemToWho);

// Action

// Function to add input value to the array
function addItemToAction() {
  // Pulling the input value from HTML doc to the DOM
  let actionValue = document.getElementById("actionInput").value;
  // Pushing the value of whoValue into the whoArray
  actionArray.push(actionValue);
  // Creating a place for the whoValues to be shown
  let actionList = document.getElementById("actionList");

  // Clearing existing items
  actionList.innerHTML = "";

  // Loop through whoArray and add each item as a list item to get an index value
  actionArray.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    actionList.appendChild(li);
    console.log(actionArray);
  });
}

let addItemToActionButton = document
  .getElementById("addItemToActionButton")
  .addEventListener("click", addItemToAction);

// WHAT
// Function to add input value to the array
function addItemToWhat() {
  // Pulling the input value from HTML doc to the DOM
  let whatValue = document.getElementById("whatInput").value;
  // Pushing the value of whoValue into the whoArray
  whatArray.push(whatValue);
  // Creating a place for the whoValues to be shown
  let whatList = document.getElementById("whatList");

  // Clearing existing items
  whatList.innerHTML = "";

  // Loop through whoArray and add each item as a list item to get an index value
  whatArray.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    whatList.appendChild(li);
    console.log(whatArray);
  });
}

let addItemToWhatButton = document
  .getElementById("addItemToWhatButton")
  .addEventListener("click", addItemToWhat);

//WHEN
// Function to add input value to the array
function addItemToWhen() {
  // Pulling the input value from HTML doc to the DOM
  let whenValue = document.getElementById("whenInput").value;
  // Pushing the value of whoValue into the whoArray
  whenArray.push(whenValue);
  // Creating a place for the whoValues to be shown
  let whenList = document.getElementById("whenList");

  // Clearing existing items
  whenList.innerHTML = "";

  // Loop through whoArray and add each item as a list item to get an index value
  whenArray.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    whenList.appendChild(li);
    console.log(whenArray);
  });
}

let addItemToWhenButton = document
  .getElementById("addItemToWhenButton")
  .addEventListener("click", addItemToWhen);

// Loop to grab one index from each array and string concatenation to squish together the final result
// Function to generate a random excuse
function getRandomExcuse() {
  if (
    whoArray.length === 0 ||
    actionArray.length === 0 ||
    whatArray.length === 0 ||
    whenArray.length === 0
  ) {
    alert("Please add at least 1 item to each category!");
    return;
  }
  let randomWho = whoArray[Math.floor(Math.random() * whoArray.length)];
  let randomAction =
    actionArray[Math.floor(Math.random() * actionArray.length)];
  let randomWhat = whatArray[Math.floor(Math.random() * whatArray.length)];
  let randomWhen = whenArray[Math.floor(Math.random() * whenArray.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  let excuseResult = document.getElementById("excuseResult");
  excuseResult.innerHTML = excuse;
}

const GenerateExcuseButton = document
  .getElementById("GenerateExcuseButton")
  .addEventListener("click", getRandomExcuse);
