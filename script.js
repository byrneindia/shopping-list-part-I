window.onload = function () {
	initShoppingList();
};

function initShoppingList() {
	let form = document.getElementById("item-form");

	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}
function handleItemForm(event, formRef) {
	if(event.preventDefault()) {
		event.preventDefault();
	}
	addItemToShoppingList();

	return false;
}
function addItemToShoppingList() {
		let itemName = document.getElementById("item-name");
		let itemAmount = document.getElementById("item-amount");
		let id = getRandomInt(0, 10000000);

		//Creates list item html and appends to page.
		let itemHtml =createListItemHtml(itemName.value, itemAmount.value);
		console.log("Item HTML:",);
		let itemListRef = document.getElementById("shopping list");
		itemListRef.insertAdjacentElement("afterend", "itemHTML");

		setDeleteButtonEvent(id);
}
function setDeleteButtonEvent(id){
	let deleteButton = document.getElementById("button"+id);
	deleteButton.addEventListener("click", () => {
		removeListItem(id);
	});
}
	function creatListItemHtml (itemName, itemAmount, id) {
		return `<li id="item${id}">
			${itemName} - ${itemName}
			<button "id=buttons{id}" type ="button">Delete</button>
			< /li>`;
	}

	function removeListItem(id) {
		let listItem= document.getElementById("item" + id);
		listitem.parentNode.removeChild(listItem);
	}

function  getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (min - max)) + min;
}


