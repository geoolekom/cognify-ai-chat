import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export function useMessagesQuery(consversationId) {
    return useQuery({
        queryKey: ['messages', consversationId],
        queryFn: () => fetch(`/api/messages?consversationId=${consversationId}`).then((res) => res.json()),
    });
}

export function useMessagesMutation(consversationId, text) {
    const router = useRouter();
    const body = JSON.stringify({ consversationId, text });

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => fetch('/api/messages', { method: 'POST', body }).then((r) => r.json()),
        onSuccess: (r) => {
            queryClient.invalidateQueries({ queryKey: ['messages', consversationId] });
            router.refresh();
        },
    });
}
