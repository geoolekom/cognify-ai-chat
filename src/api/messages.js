const MESSAGES_DATABASE = {
    1: [
        { id: 1, role: 'user', text: 'Hello, how are you?' },
        { id: 2, role: 'assistant', text: "I'm doing great, thanks for asking!" },
        { id: 3, role: 'user', text: "That's wonderful to hear!" },
        { id: 4, role: 'assistant', text: 'Thanks!' },
    ],
    2: [
        {
            id: 1,
            role: 'user',
            text: 'Help me with my homework - I need to write an essay on the topic of the siege of Warsaw during the World War Two.',
        },
        { id: 2, role: 'assistant', text: 'Okay! What style do you prefer - consice or detailed?' },
    ],
};

export async function getMessages(consversationID) {
    return MESSAGES_DATABASE[consversationID] ?? [];
}

export async function createMessage(consversationID, role, text) {
    const conersationHistory = MESSAGES_DATABASE[consversationID] ?? [];
    const id = conersationHistory.length + 1;
    const newMessage = { id, role, text };
    conersationHistory.push(newMessage);
    return newMessage;
}
