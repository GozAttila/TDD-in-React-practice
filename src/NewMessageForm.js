import React from 'react';

// import "./NewMessageForm.css";

const NewMessageForm = () => {
    return (
        <div className="newMessageForm">
            <input
                type="text"
                data-testid="messageText"
            />
        </div>
    );
};

export default NewMessageForm;
