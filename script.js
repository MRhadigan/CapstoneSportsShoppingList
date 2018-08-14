//function listItems() {

var listOfItems = ["BasketBall", "Baseball", "Baseball Glove", "Hockey Stick" ];

var priceList = ["$19.99", "$18.99", "$37.99", "$63.79" ];
 
var cart = [];

var index = 0;

//for (var i = 0; i < listOfItems.length; i++) {
 	//text += "<li>" + listOfItems[i] + "</li>";
//}


//}

function pressClick(index) {
	cart.push(listOfItems[index], priceList[index]);
	console.log(cart);
}

function displayCart() {
	var cart = document.getElementById("Check Out!");

	 box.innerHTML += "<p>" + checkOut + "</p>";
}

function checkOut() {
	cart.push();
	return cart;

}