import ChatMessage from './ChatMessage';
import { getMessages } from '@/src/server/messages';

async function MessageList({ conversationID }) {
    const messages = await getMessages(conversationID);

    const chatMessages = [];
    for (const message of messages) {
        chatMessages.push(<ChatMessage key={message.id} role={message.role} text={message.text} />);
    }
    return <div className="p-2 flex flex-col">{chatMessages}</div>;
}

export default MessageList;
