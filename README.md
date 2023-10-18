# Go To War
<img src="https://img.shields.io/badge/almost-finished-blue">
Play a card game against the computer. Draw a card, and the player with the highest card wins! Start <a href="https://franciscocasillas.github.io/cardsgame/">here</a>.

<img width="1048" alt="Screenshot 2023-10-16 at 6 09 35 p m" src="https://github.com/franciscocasillas/cardsgame/assets/17735860/e9aa9489-e476-4425-8180-f286173a7453">

# Project description
This project was built using <b>HTML, CSS, Javascript and the <a href="https://deckofcardsapi.com">Deck of Cards API</a></b>. 

# Project goals
- Develop a simple game using external APIs.
- Enhance skills in Document Object Model (DOM) manipulation.
- Apply clean code principles to improve code readability. 

# Lessons learned
1. One of the primary goals of this project was to adhere to clean code principles. Applying these principles to the Javascript code significantly improved its readability. While there is room for improvement in function and variable naming, the code is much more organized. However, upon reviewing my HTML code, I realized that similar principles to enhance its readability, too. Planning the HTML structure in advance can expedite the process of locating elements and improve the overall code quality.

# Code examples
Here are a few examples of the refactored code in order to meet clean code principles:
```js
function defineWinner(userCardValue, computerCardValue) {
	if (userCardValue > computerCardValue) {
		document.querySelector("h2").innerText = "You Win!";
	} else if (userCardValue < computerCardValue) {
		document.querySelector("h2").innerText = "You lose";
	} else {
		document.querySelector("h2").innerText = "It's a tie";
	}
}
```
```js
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
```


