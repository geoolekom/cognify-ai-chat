'use client';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

function ChatPanel({ conversationId, initialMessages }) {
    const { messages, sendMessage } = useChat({
        id: conversationId,
        messages: initialMessages,
        transport: new DefaultChatTransport({ api: '/api/streaming-chat' }),
    });
    return (
        <main className="flex flex-col flex-1">
            <MessageList messages={messages} />
            <MessageForm conversationID={conversationId} sendMessage={sendMessage} />
        </main>
    );
}

export default ChatPanel;
