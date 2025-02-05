const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

// Predefined questions and answers
const responses = {
    "hello": "Hello! Welcome to Bangabandhu Digital University. How can I assist you today?",
    "hi": "Hi there! How can I help you regarding Bangabandhu Digital University?",
    "what is bangabandhu digital university": "Bangabandhu Sheikh Mujibur Rahman Digital University is an online educational institution offering various degree programs and courses to students nationwide.",
    "what courses are offered": "We offer a wide range of courses including Computer Science, Business Administration, Education, and more. Visit our website for a detailed list.",
    "admission": "Admissions are conducted online. Please visit our admissions page to fill out the application form and submit the required documents.",
    "contact information": "You can contact us at contact@bangabandhudigital.edu or call us at +880-1234-567890.",
    "who tanzif": "Rony's eX GF",
    "who linku": "Linku is a mal",
    "who arif": "arif is a Mal2",
    "thank you": "You're welcome! If you have any more questions, feel free to ask.",
    "bye": "Goodbye! Have a great day!"
};

// Function to add messages to chat
function addMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', type);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message');
    messageContent.innerText = message;

    messageDiv.appendChild(messageContent);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get bot response
function getResponse(input) {
    input = input.toLowerCase().trim();
    return responses[input] || "I'm sorry, I don't understand that. Can you please rephrase or ask something else about Bangabandhu Digital University?";
}

// Event listener for send button
sendBtn.addEventListener('click', () => {
    const input = userInput.value;
    if (input === "") return;

    addMessage(input, 'user-message');
    const response = getResponse(input);
    addMessage(response, 'bot-message');
    userInput.value = "";
});

// Allow sending message by pressing Enter
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});
