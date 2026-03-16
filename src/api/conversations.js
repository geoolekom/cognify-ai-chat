const CONERSATION_DATABASE = [
    { id: 1, title: 'How is your day?' },
    { id: 2, title: 'Help me with homework' },
];

export async function getConversations() {
    return CONERSATION_DATABASE;
}

export async function createConversation(title) {
    const id = CONERSATION_DATABASE.length + 1;
    const newConversation = {
        id,
        title,
    };
    CONERSATION_DATABASE.push(newConversation);
    return newConversation;
}
