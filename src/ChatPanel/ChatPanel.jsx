'use client';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { useState, useEffect } from 'react';
import { getMessages, createMessage } from '../api/messages';

function ChatPanel({ activeConversationID }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages(activeConversationID).then(setMessages);
    }, [messages, activeConversationID]);

    function appendMessage(input) {
        createMessage(activeConversationID, input).then(() => {
            setMessages([...messages]);
        });
    }

    return (
        <main className="flex flex-col flex-1">
            <MessageList messages={messages} />
            <MessageForm appendMessage={appendMessage} />
        </main>
    );
}

export default ChatPanel;
