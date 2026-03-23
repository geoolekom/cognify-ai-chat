import { llmRequest } from '../openrouter';

const MESSAGES_DATABASE: Map<number, any> = new Map([
    [
        1,
        [
            { id: 1, role: 'user', text: 'Hello, how are you?' },
            { id: 2, role: 'assistant', text: "I'm doing great, thanks for asking!" },
            { id: 3, role: 'user', text: "That's wonderful to hear!" },
            { id: 4, role: 'assistant', text: 'Thanks!' },
        ],
    ],
    [
        2,
        [
            {
                id: 1,
                role: 'user',
                text: 'Help me with my homework - I need to write an essay on the topic of the siege of Warsaw during the World War Two.',
            },
            { id: 2, role: 'assistant', text: 'Okay! What style do you prefer - consice or detailed?' },
        ],
    ],
]);

async function getMessages(consversationID: number) {
    return MESSAGES_DATABASE.get(consversationID) ?? [];
}

async function createMessage(consversationID: number, text: string) {
    const conersationHistory = MESSAGES_DATABASE.get(consversationID) ?? [];
    const id = conersationHistory.length + 1;
    const newMessage = { id, role: 'user', text };
    conersationHistory.push(newMessage);

    const openAImessages = conersationHistory.map(({ role, text }) => ({ role, content: text }));
    const aiResponse = await llmRequest(openAImessages);
    const aiMessage = { id: id + 1, role: 'assistant', text: aiResponse };
    conersationHistory.push(aiMessage);
    return aiMessage;
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const consversationIDstring = url.searchParams.get('consversationID') ?? '0';
    const consversationID = Number.parseInt(consversationIDstring);
    const data = await getMessages(consversationID);
    return Response.json(data);
}

export async function POST(request: Request) {
    const payload: { consversationID: number; text: string } = await request.json();
    const newMessage = await createMessage(payload.consversationID, payload.text);
    return Response.json(newMessage);
}
