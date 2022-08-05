/** @format */

"use strict";

// Genrate Random Number (1-20)
const randomNumber = Math.round(Math.random() * 20);

// Get message node
const message = document.querySelector(".message");

document.querySelector(".check").addEventListener("click", function () {
  // Get Guess Number
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    message.textContent = "⛔ No Number";
  }
});
