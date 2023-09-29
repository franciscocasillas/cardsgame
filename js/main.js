document.querySelector("#deck").addEventListener("click", createDeck);
document.querySelector("#draw").addEventListener("click", drawCard);
let deckID = "";

function createDeck() {
	fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			deckID = data.deck_id;
		})
		.catch((err) => console.log(`error ${err}`));

	document.querySelector("#deck").style.display = "none";
	document.querySelector("#draw").style.display = "block";
}

function drawCard() {
	fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			document.querySelector("h2").innerText = "";
			console.log(data.cards[0].image);
			document.querySelector(".userCard").src = data.cards[0].image;
			document.querySelector(".computerCard").src = data.cards[1].image;
			console.log(data.cards[0].value);
			let userCardValue = calculateValue(data.cards[0].value);
			let computerCardValue = calculateValue(data.cards[1].value);
			if (userCardValue > computerCardValue) {
				document.querySelector("h2").innerText = "You Win!";
			} else if (userCardValue < computerCardValue) {
				document.querySelector("h2").innerText = "You lose";
			} else {
				document.querySelector("h2").innerText = "It's a tie";
			}
		})
		.catch((err) => console.log(`error ${err}`));
}

function calculateValue(value) {
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
