/** @format */

"use strict";

// Genrate Random Number (1-20)
const randomNumber = Math.round(Math.random() * 20);

//  Get Hidden Number Node
const HiddenNumber = document.querySelector(".number");

// Get Body Node
const body = document.body;

// Get message node
const message = document.querySelector(".message");

document.querySelector(".check").addEventListener("click", function () {
  // Get Guess Number
  const guessNumber = Number(document.querySelector(".guess").value);

  // If Guess Number Not Inserted Yet
  if (!guessNumber) {
    message.textContent = "⛔ No Number";
  } else {
    // If Random Number And Guess Number Was Equal
    if (guessNumber === randomNumber) {
      message.textContent = "🎉 Correct Number";
      HiddenNumber.textContent = randomNumber;
      body.style.backgroundColor = "#60b347";
    } else if (guessNumber > randomNumber) {
      message.textContent = "🎉 Too Height";
    } else if (guessNumber < randomNumber) {
      message.textContent = "🎉 Too Low";
    }
  }
});
