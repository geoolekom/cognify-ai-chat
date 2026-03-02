const API_KEY = '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';
export const BASE_URL = 'https://openrouter.ai/api/v1';

export async function sendMessage(messages) {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            model: 'google/gemma-3n-e2b-it:free',
            messages: messages,
        }),
    });
    const data = await response.json();
    return data.choices[0].message.content;
}
