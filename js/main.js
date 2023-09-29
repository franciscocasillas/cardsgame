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
			console.log(data.cards[0].image);
		})
		.catch((err) => console.log(`error ${err}`));
}