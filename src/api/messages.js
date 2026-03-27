import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function getMessages(consversationID) {
    return useQuery({
        queryKey: ['messages', consversationID],
        queryFn: () => fetch(`/api/messages?consversationID=${consversationID}`).then((res) => res.json()),
    });
}

export function createMessage(consversationID, text) {
    const consversationIDNumber = Number.parseInt(consversationID);
    const body = JSON.stringify({ consversationID: consversationIDNumber, text });

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => fetch('/api/messages', { method: 'POST', body }).then((r) => r.json()),
        onSuccess: (r) => {
            queryClient.invalidateQueries({ queryKey: ['messages', consversationID] });
        },
    });
}
