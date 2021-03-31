import React from 'react';

// import "./NewMessageForm.css";

const NewMessageForm = () => {
    return (
        <div className="newMessageForm">
            <input
                type="text"
                data-testid="messageText"
            />
            <button
                data-testid="sendButton"
            >
                Send
            </button>
        </div>
    );
};

export default NewMessageForm;
