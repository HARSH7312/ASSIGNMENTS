// Change Text and Style on Button Click
function changeText() {
    let textElement = document.getElementById("text-change");
    textElement.innerText = "Text has been changed!";
    textElement.style.color = "red";
}

// Hover Effects
function mouseOverEffect(element) {
    element.style.backgroundColor = "yellow";
}
function mouseOutEffect(element) {
    element.style.backgroundColor = "white";
}

// Dynamic List - Add and Remove Items
function addItem() {
    let newItem = document.createElement("li");
    newItem.innerText = "New Item";
    newItem.onclick = function () {
        this.remove();
    };
    document.getElementById("dynamic-list").appendChild(newItem);
}