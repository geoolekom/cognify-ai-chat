import { useQuery } from '@tanstack/react-query';

export function getConversations() {
    return useQuery({
        queryKey: ['conversations'],
        queryFn: () => fetch('/api/conversations').then((res) => res.json()),
    });
}

export async function createConversation(title) {
    return await fetch('/api/conversations', {
        method: 'POST',
        body: JSON.stringify({ title }),
    });
}
