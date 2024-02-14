import { isValidColor } from "./colors.js";

export function handleResult({ results }) {
  const words = results[results.length - 1][0].transcript;
  //Lowercase everything
  let color = words.toLowerCase();
  //Strip any spaces
  color = color.replace(/\s/g, "");
  //Check if it's a valid color
  if (!isValidColor(color)) return;
  //If it is, change the background color
  const colorSpan = document.getElementsByClassName(color)[0];
  colorSpan.classList.add("got");
  document.body.style.backgroundColor = color;
}
