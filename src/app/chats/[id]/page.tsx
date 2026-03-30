import Sidebar from '@/src/components/Sidebar/Sidebar';
import ChatPanel from '@/src/components/ChatPanel/ChatPanel';
import { use } from 'react';

interface ChatPageParams {
    id: string;
}

interface ChatPageProps {
    params: Promise<ChatPageParams>;
}

export default function ChatPage({ params }: ChatPageProps) {
    const { id }: { id: string } = use(params);
    return (
        <>
            <Sidebar activeConversationID={id} />
            <ChatPanel activeConversationID={id} />
        </>
    );
}
