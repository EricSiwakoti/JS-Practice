const jokeButton = document.querySelector(".getJoke");
const jokeButtonSpan = jokeButton.querySelector(".jokeText");
const jokeHolder = document.querySelector(".joke p");
const loader = document.querySelector(".loader");

const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "Omg Dad",
  "You are the worst",
  "Seriously?",
  "Stop",
  "Please stop",
  "That was the worst one",
];

async function fetchJoke() {
  //Turn loader on
  loader.classList.remove("hidden");
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  //Turn loader off
  loader.classList.add("hidden");
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log("OOPS! We used that one last time, look again");
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  try {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButtonSpan.textContent = randomItemFromArray(
      buttonText,
      jokeButtonSpan.textContent
    );
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("Error fetching joke:", error);
  }
}

jokeButton.addEventListener("click", handleClick);
