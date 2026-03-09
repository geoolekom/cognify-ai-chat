import { useState } from 'react';
import Conversation from './Conversation';

function Sidebar({ activeConversationID, setActiveConversationID }) {
    const initialConversations = [
        { id: 1, title: 'How is your day?' },
        { id: 2, title: 'Help me with homework' },
    ];
    const [conversations, setConversations] = useState(initialConversations);
    const conversationElements = [];
    for (const conversation of conversations) {
        conversationElements.push(
            <Conversation
                key={conversation.id}
                title={conversation.title}
                isActive={activeConversationID === conversation.id}
                setActive={() => setActiveConversationID(conversation.id)}
            />,
        );
    }

    console.log(conversationElements);

    function createNewConversation() {
        const newConversation = { id: conversations.length + 1, title: 'New Conversation' };
        setConversations([...conversations, newConversation]);
        setActiveConversationID(newConversation.id);
    }

    return (
        <aside className="flex flex-col w-64 bg-gray-900 text-white p-4">
            <div>
                <button className="w-full bg-red-500 hover:bg-red-600 p-3 my-1" onClick={createNewConversation}>
                    + New Chat
                </button>
            </div>
            {conversationElements}
        </aside>
    );
}

export default Sidebar;
