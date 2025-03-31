// Variables
var oldVar = "This is var (not recommended)";
let userName = "John"; // Preferred
const PI = 3.1416; // Constant

// Function for BMI Calculation
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}

// If-Else Condition
function checkAge(age) {
    if (age < 18) {
        return "You are a minor.";
    } else {
        return "You are an adult.";
    }
}

// Loops - Generate a Dynamic List
function generateTable(n) {
    let table = "<ul>";
    for (let i = 1; i <= n; i++) {
        table += `<li>Item ${i}</li>`;
    }
    table += "</ul>";
    document.getElementById("list-container").innerHTML = table;
}