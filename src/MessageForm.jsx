import { useState } from 'react';

function MessageForm({ appendMessage }) {
    const [input, setInput] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        appendMessage(input);
        setInput('');
    }

    return (
        <form className="p-4 flex" onSubmit={onSubmit}>
            <div className="flex-1">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    className="w-full p-2 border"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div>
                <button type="submit" className="p-2 bg-gray-300">
                    Send
                </button>
            </div>
        </form>
    );
}

export default MessageForm;
