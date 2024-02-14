import { handleResult } from "./handlers.js";
import { colorsByLength, isDark } from "./colors.js";

const colorsEl = document.querySelector(".colors");

function displayColors(colors) {
  return colors
    .map(
      (color) =>
        `<span class="color ${color} ${
          isDark(color) ? "dark" : ""
        }" style="background: ${color};">${color}</span>`
    )
    .join("");
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  //Check if the browser supports speech recognition
  if (!("SpeechRecognition" in window)) {
    console.log("Sorry your browser does not support speech recognition");
    return;
  }
  //Start the speech recognition
  console.log("Starting...");
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

colorsEl.innerHTML = displayColors(colorsByLength);
start();
