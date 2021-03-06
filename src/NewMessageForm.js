import React, { useState } from 'react';

// import "./NewMessageForm.css";

const NewMessageForm = ({onSend}) => {
    const [inputText, setInputText] = useState('')

    const handleTextChange = event => {
        setInputText(event.target.value)
    }

    const handleSend = () => {
        onSend(inputText)
        setInputText('')
    }

    return (
        <div className="newMessageForm">
            <input
                type="text"
                data-testid="messageText"
                value={inputText}
                onChange={handleTextChange}
            />
            <button
                data-testid="sendButton"
                onClick={handleSend}
            >
                Send
            </button>
        </div>
    );
};

export default NewMessageForm;
