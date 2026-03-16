import { sendMessage, streamAssistantResponse } from './api.js';

const form = document.getElementById('messages-form');
const input = document.getElementById('messages-form-input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const userMessage = input.value;
    displayMessage(userMessage, 'user');
    input.value = '';

    const messageElements = document.querySelectorAll('#messages-history chat-message');
    const messages = Array.from(messageElements).map((element) => ({
        role: element.getAttribute('role'),
        content: element.textContent,
    }));
    getAssistantResponse(messages);
});

function doSomething() {
    console.log('Doing something...');
    for (i = 0; i < 1000000000; i++) {
        // Simulate a long-running task
    }
    console.log('Done!');
}

function displayMessage(message, role) {
    const messageDiv = document.createElement('chat-message');
    messageDiv.setAttribute('role', role);
    const messageContent = document.createElement('div');
    messageContent.textContent = message;
    messageDiv.appendChild(messageContent);
    document.getElementById('messages-history').appendChild(messageDiv);
    return messageContent;
}

function getAssistantResponse(messages) {
    const messageContent = displayMessage('', 'assistant');
    streamAssistantResponse(messages, (text) => {
        messageContent.textContent += text;
    }).then();
}
