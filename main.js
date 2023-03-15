"use strict";

let hscore = 0;
let points = document.querySelector(".points").textContent;
let guess = Math.trunc(Math.random() * 10) + 1;
let guessedCorrectly = false;
const start = document.querySelector(".correct");

function checkGuess() {
  const input = Number(document.querySelector(".input").value);
  if (!input || input < 1 || input >= 10) {
    start.textContent = "Invalid number!";
  } else if (guess === input) {
    start.textContent = "Correct Number!";
    document.querySelector(".guess.guess2").textContent = guess;
    hscore += 5;
    document.querySelector(".hscore").textContent = hscore;
    points++;
    document.querySelector(".points").textContent = points;
    guessedCorrectly = true;
    changeBackgroundColor();
  } else if (guess > input) {
    start.textContent = "Too low!";
    points--;
    document.querySelector(".points").textContent = points;
  } else if (guess < input) {
    start.textContent = "Too High!";
    points--;
    document.querySelector(".points").textContent = points;
  }
}

const check = document.querySelector(".check");
check.addEventListener("click", function () {
  if (guessedCorrectly) {
    guessedCorrectly = false;
    const again = new Event("click");
    document.querySelector(".again").dispatchEvent(again);
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    checkGuess();
  }
});

const again = document.querySelector(".again");
again.addEventListener("click", function () {
  document.querySelector(".input").value = "";
  start.textContent = "Start guessing...";
  guess = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".guess.guess2").textContent = "?";
});

function changeBackgroundColor() {
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "voilet",
    "turquoise",
    "teal",
    "E70CBF",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector("body").style.backgroundColor = randomColor;
}

const input = document.querySelector(".input");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".check").click();
  }
});
