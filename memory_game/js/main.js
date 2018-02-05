var cards = [
	{
	rank: 'QUEEN',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
	},
	{
	rank: 'QUEEN',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
	},
	{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
	];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log('User flipped ' + cards[cardId].cardImage);
	console.log('User flipped ' + cards[cardId].suit);
checkForMatch();
}

//"Calling" the flipcard function"
flipCard(0);
flipCard(2);
