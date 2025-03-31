// Display Current Date & Time
function displayDateTime() {
    let now = new Date();
    document.getElementById("date-time").innerText = now.toLocaleString();
}

// Generate a Random Number
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random-number").innerText = "Random Number: " + randomNumber;
}

// Fetch Data from API using AJAX
function fetchWeather() {
    let city = "London";
    let apiKey = "your_api_key"; // Replace with an actual OpenWeather API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weather-data").innerText = `Weather in ${city}: ${data.weather[0].description}`;
        })
        .catch(error => console.log("Error fetching data: ", error));
}
