import React from 'react';

const MessageList = ({data}) => {
    return (
        <ul className="messageList">
            {data.map(message => <li key={message}>{message}</li>)}
        </ul>
    );
};

export default MessageList;
