import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import ChatPanel from './ChatPanel/ChatPanel';

function App() {
    const initialMessages = [
        { id: 1, role: 'user', text: 'Hello, how are you?' },
        { id: 2, role: 'assistant', text: "I'm doing great, thanks for asking!" },
        { id: 3, role: 'user', text: "That's wonderful to hear!" },
        { id: 4, role: 'assistant', text: 'Thanks!' },
    ];
    const [messages, setMessages] = useState(initialMessages);

    function appendMessage(input) {
        setMessages([...messages, { id: messages.length + 1, role: 'user', text: input }]);
    }

    const [activeConversationID, setActiveConversationID] = useState(1);

    return (
        <>
            <Sidebar activeConversationID={activeConversationID} setActiveConversationID={setActiveConversationID} />
            <ChatPanel messages={messages} appendMessage={appendMessage} />
        </>
    );
}

export default App;
