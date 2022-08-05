/** @format */

"use strict";

// Genrate Random Number Function (1 - 20)
const GenrateRandomNumber = function () {
  return Math.round(Math.random() * 20);
};

// Display Message Function (1 - 20)
const DisplayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// local Variables
let randomNumber = GenrateRandomNumber();
let score = 20;
let heigherScore = 0;

// Set Click Event On Check Button
document.querySelector(".check").addEventListener("click", function () {
  //  Guessed Number
  const guessNumber = Number(document.querySelector(".guess").value);

  // If Guess Number Not Inserted Yet
  if (!guessNumber) {
    DisplayMessage("⛔ No Number");
  } else {
    // If Random Number And Guess Number Was Equal
    if (guessNumber === randomNumber) {
      DisplayMessage("🎉 Correct Number");
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      if (score > heigherScore) {
        heigherScore = score;
        document.querySelector(".highscore").textContent = heigherScore;
      }
      // If Random Number And Guess Number Wasn't Equal
    } else if (guessNumber !== randomNumber) {
      const msg = guessNumber > randomNumber ? "↗ Too Height" : "↘ Too Low";
      DisplayMessage(msg);
      score -= 1;
      if (score > 0) {
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".score").textContent = 0;
        DisplayMessage("💥 You Lose, Try Again");
      }
    }
  }
});

// Set Click Event On Again Button
document.querySelector(".again").addEventListener("click", function () {
  randomNumber = GenrateRandomNumber();
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  DisplayMessage("Start guessing...");
});
