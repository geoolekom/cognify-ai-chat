import Sidebar from '@/src/components/Sidebar/Sidebar';
import ChatPanel from '@/src/components/ChatPanel/ChatPanel';
import { getMessages } from '@/src/server/messages';

interface ChatPageParams {
    id: string;
}

interface ChatPageProps {
    params: Promise<ChatPageParams>;
}

export default async function ChatPage({ params }: ChatPageProps) {
    const { id } = await params;
    const initialMessages = await getMessages(id);
    const mappedMessages = initialMessages.map((m) => ({
        id: m.id,
        role: m.role,
        content: m.text,
    }));
    return (
        <>
            <Sidebar activeConversationID={id} />
            <ChatPanel conversationId={id} initialMessages={mappedMessages} />
        </>
    );
}
