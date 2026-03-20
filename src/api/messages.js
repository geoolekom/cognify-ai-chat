export async function getMessages(consversationID) {
    const response = await fetch(`/api/messages?consversationID=${consversationID}`);
    return await response.json();
}

export async function createMessage(consversationID, text) {
    const response = await fetch('/api/messages', {
        method: 'POST',
        body: JSON.stringify({ consversationID, text }),
    });
    return await response.json();
}
