import { useState } from 'react';
import './App.css';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

function App() {
    const initialMessages = [
        { id: 1, role: 'user', text: 'Hello, how are you?' },
        { id: 2, role: 'assistant', text: "I'm doing great, thanks for asking!" },
        { id: 3, role: 'user', text: "That's wonderful to hear!" },
    ];
    const [messages, setMessages] = useState(initialMessages);

    function handleSubmit(input) {
        setMessages([...messages, { id: messages.length + 1, role: 'user', text: input }]);
    }

    return (
        <>
            <MessageList messages={messages} />
            <MessageForm onSubmit={handleSubmit} />
        </>
    );
}

export default App;
