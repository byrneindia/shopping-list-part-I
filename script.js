window.onload = function () {
	initShoppingList();
};
function initShoppingList() {
	let form = document.getElementById("item-form");

	form.addEventListener("submit", (event) => {
		handleItemForm (event, form);
}
function handleItemForm(event, formRef) {
	if(event.preventDefault()) {
		event.preventDefault();
	}
	addItemToShoppingList();

	return false;

	let itemHtml =addItemToShoppingList();
	let itemListRef = document.getElementById("shopping list");
		itemListRef.insertAdjacentElement("afterend,")

	function addItemToShoppingList() {
		let itemName = document.getElementById("item");
		let itemAmount = document.getElementById("item-amount");
		let id = getRandomInt(0, 10000000)
	}
function createListItemHtml() {
		return '<li id= "item${id}">
	 ${itemName} - ${itemAmount}
	<button type="button">Delete Item</button>
	</li>';
	}
	function setDeleteButtonEvent(id):
	let deletButton = document.getElementById("button"+id)
	deletButton.addEventListener("click", ()) =>
}
function  getRandomInt(min, max) {
		min=Math.ceil(min);
		max =Math.floor(max);
		return Math.floor(Math.random () *(min - max) + min;  //The maximum
}
}

