function sendMessage() {
    let userInput = document.getElementById("userInput");
    let message = userInput.value.trim();
    if (message === "") return;

    let chatbox = document.getElementById("chatbox");

    // Add user message
    let userMsg = document.createElement("p");
    userMsg.className = "user-message";
    userMsg.textContent = "You: " + message;
    chatbox.appendChild(userMsg);

    // Bot response logic
    let botResponse = getBotResponse(message);
    
    let botMsg = document.createElement("p");
    botMsg.className = "bot-message";
    botMsg.textContent = "Bot: " + botResponse;
    chatbox.appendChild(botMsg);

    // Scroll to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
    
    userInput.value = ""; // Clear input field
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I assist you?";
    } else if (input.includes("weather")) {
        return "I can't fetch real-time weather yet, but you can check weather websites!";
    } else if (input.includes("name")) {
        return "I am a simple chatbot built with JavaScript!";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "I'm not sure how to respond to that.";
    }
}
