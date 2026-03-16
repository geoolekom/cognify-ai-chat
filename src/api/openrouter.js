const API_KEY = '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';
const MODEL = 'google/gemini-3.1-flash-lite-preview';
export const BASE_URL = 'https://openrouter.ai/api/v1';

async function completionsRequest(model, messages, stream = false) {
    return await fetch(`${BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            model: model,
            messages: messages,
            stream: stream,
        }),
    });
}

export async function llmRequest(messages) {
    const response = await completionsRequest(MODEL, messages);
    const data = await response.json();
    return data.choices[0].message.content;
}
