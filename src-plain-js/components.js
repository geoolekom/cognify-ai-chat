class ChatMessage extends HTMLElement {
    connectedCallback() {
        const role = this.getAttribute('role');
        this.classList.add(
            'p-2',
            'flex',
            role === 'user' ? 'justify-start' : 'justify-end',
            role === 'user' ? 'bg-gray-200' : 'bg-blue-200',
        );
    }
}

customElements.define('chat-message', ChatMessage);
