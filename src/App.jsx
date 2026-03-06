import { useState } from 'react';
import './App.css';
import MessageList from './MessageList';

function App() {
    const initialMessages = [
        { id: 1, role: 'user', text: 'Hello, how are you?' },
        { id: 2, role: 'assistant', text: "I'm doing great, thanks for asking!" },
        { id: 3, role: 'user', text: "That's wonderful to hear!" },
    ];
    const [messages, setMessages] = useState(initialMessages);

    return (
        <>
            <MessageList messages={messages} />
            <button
                className="p-2 bg-gray-300"
                onClick={() =>
                    setMessages([...messages, { id: messages.length + 1, role: 'user', text: 'New message!' }])
                }
            >
                Add Message
            </button>
        </>
    );
}

export default App;
