document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "Gru",
      img: "images/Gru.jpg",
    },
    {
      name: "Lucy",
      img: "images/Lucy.jpg",
    },
    {
      name: "Margo",
      img: "images/Margo.jpg",
    },
    {
      name: "Edith",
      img: "images/Edith.jpg",
    },
    {
      name: "Agnes",
      img: "images/Agnes.jpg",
    },
    {
      name: "Kevin",
      img: "images/Kevin.jpg",
    },
    {
      name: "Bob",
      img: "images/Bob.jpg",
    },
    {
      name: "Stuart",
      img: "images/Stuart.jpg",
    },
    {
      name: "Dr.Nefario",
      img: "images/Dr.Nefario.jpg",
    },
    {
      name: "Gru",
      img: "images/Gru.jpg",
    },
    {
      name: "Lucy",
      img: "images/Lucy.jpg",
    },
    {
      name: "Margo",
      img: "images/Margo.jpg",
    },
    {
      name: "Edith",
      img: "images/Edith.jpg",
    },
    {
      name: "Agnes",
      img: "images/Agnes.jpg",
    },
    {
      name: "Kevin",
      img: "images/Kevin.jpg",
    },
    {
      name: "Bob",
      img: "images/Bob.jpg",
    },
    {
      name: "Stuart",
      img: "images/Stuart.jpg",
    },
    {
      name: "Dr.Nefario",
      img: "images/Dr.Nefario.jpg",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.jpg");
      card.setAttribute("data-id", i);
      card.setAttribute("style", "max-height:100px;max-width:100px;");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.jpg");
      cards[optionTwoId].setAttribute("src", "images/white.jpg");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});