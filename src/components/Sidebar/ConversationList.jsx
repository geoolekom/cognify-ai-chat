import Link from 'next/link';
import Conversation from './Conversation';
import { getConversations } from '@/src/server/conversations';

async function ConversationList({ activeConversationID }) {
    const conversations = await getConversations();
    const conversationElements = [];
    for (const conversation of conversations) {
        conversationElements.push(
            <Link href={`/chats/${conversation.id}`} key={conversation.id}>
                <Conversation title={conversation.title} isActive={activeConversationID == conversation.id} />
            </Link>,
        );
    }
    return <>{conversationElements}</>;
}

export default ConversationList;
