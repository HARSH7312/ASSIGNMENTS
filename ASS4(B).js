// Alert Box on Form Submission
function showAlert() {
    alert("Form submitted successfully!");
}

// Confirmation Box before Deleting an Item
function deleteItem() {
    let confirmDelete = confirm("Are you sure you want to delete this?");
    if (confirmDelete) {
        alert("Item deleted.");
    } else {
        alert("Deletion cancelled.");
    }
}

// Prompt Box for User Input
function askUserName() {
    let name = prompt("Enter your name:");
    if (name) {
        document.getElementById("username-display").innerText = "Hello, " + name;
    }
}