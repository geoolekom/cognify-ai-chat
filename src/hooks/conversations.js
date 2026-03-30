import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { redirect } from 'next/navigation';

export function useConversationsQuery() {
    return useQuery({
        queryKey: ['conversations'],
        queryFn: () => fetch('/api/conversations').then((res) => res.json()),
    });
}

export function useConversationsMutation(title) {
    const body = JSON.stringify({ title });
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => fetch('/api/conversations', { method: 'POST', body }).then((r) => r.json()),
        onSuccess: (r) => {
            queryClient.invalidateQueries({ queryKey: ['conversations'] }).then(() => {
                redirect(`/chats/${r.id}`);
            });
        },
    });
}
