document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('input-text').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const inputField = document.getElementById('input-text');
    const message = inputField.value;
    if (message.trim() === '') return;

    displayMessage(message, 'user-message');
    inputField.value = '';

    try {
        const response = await fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input_text: message })
        });

        if (response.ok) {
            const data = await response.json();
            displayMessage(data.output, 'bot-message');
        } else {
            displayMessage('Error: Unable to get response', 'bot-message');
        }
    } catch (error) {
        displayMessage('Error: ' + error.message, 'bot-message');
    }
}

function displayMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
