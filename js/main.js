document.querySelector("#deck").addEventListener("click", createDeck);
document.querySelector("#draw").addEventListener("click", drawCards);
let deckID = "";

function createDeck() {
	fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
		.then((res) => res.json())
		.then((data) => {
			deckID = data.deck_id;
		})
		.catch((err) => console.log(`error ${err}`));
	showGoToWarButton();
	hideCards();
	clearResults();
}

function showGoToWarButton() {
	document.querySelector("#draw").style.display = "block";
}

function hideCards() {
	document.querySelector("#table").style.display = "none";
}

function clearResults() {
	document.querySelector("h2").innerText = "";
}

function drawCards() {
	fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
		.then((res) => res.json())
		.then((data) => {
			clearResults();
			displayCards();
			displayCardImages(data.cards[0].image, data.cards[1].image);
			defineWinner(
				calculateCardValue(data.cards[0].value),
				calculateCardValue(data.cards[1].value)
			);
		})
		.catch((err) => console.log(`error ${err}`));
}

function displayCards() {
	document.querySelector("#table").style.display = "flex";
}

function displayCardImages(userCard, computerCard) {
	document.querySelector(".userCard").src = userCard;
	document.querySelector(".computerCard").src = computerCard;
}

function defineWinner(userCardValue, computerCardValue) {
	if (userCardValue > computerCardValue) {
		document.querySelector("h2").innerText = "You Win!";
	} else if (userCardValue < computerCardValue) {
		document.querySelector("h2").innerText = "You lose";
	} else {
		document.querySelector("h2").innerText = "It's a tie";
	}
}

function calculateCardValue(value) {
	if (value === "ACE") {
		return 14;
	} else if (value === "KING") {
		return 13;
	} else if (value === "QUEEN") {
		return 12;
	} else if (value === "JACK") {
		return 11;
	} else {
		return Number(value);
	}
}
