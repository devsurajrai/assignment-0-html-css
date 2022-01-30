let allCards = document.querySelectorAll(".card-container");
let cardButtons = document.querySelectorAll(".display-card-btn");

let previousActiveButton = cardButtons[0];
let lastShownCard = allCards[5];
let activeCardBtnStyle = (button) => {
  if (previousActiveButton) {
    previousActiveButton.classList.remove("card-active-button");
  }
  previousActiveButton = button;
  button.classList.add("card-active-button");
};

let cardRemove = () => {
  lastShownCard.classList.add("display-none");
};

let showCard = (button) => {
  activeCardBtnStyle(button);
  cardRemove();

  if (button.classList.contains("basic")) {
    allCards[5].classList.remove("display-none");
    lastShownCard = allCards[5];
  } else if (button.classList.contains("basic-with-text-over-media")) {
    allCards[4].classList.remove("display-none");
    lastShownCard = allCards[4];
  } else if (button.classList.contains("basic-with-header")) {
    allCards[3].classList.remove("display-none");
    lastShownCard = allCards[3];
  } else if (button.classList.contains("basic-with-only-buttons")) {
    allCards[2].classList.remove("display-none");
    lastShownCard = allCards[2];
  } else if (button.classList.contains("basic-with-only-icons")) {
    allCards[1].classList.remove("display-none");
    lastShownCard = allCards[1];
  } else {
    allCards[0].classList.remove("display-none");
    lastShownCard = allCards[0];
  }
};

cardButtons.forEach((button) => {
  button.addEventListener("click", () => showCard(button));
});
