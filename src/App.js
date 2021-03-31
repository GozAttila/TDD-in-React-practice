import React, {useState} from 'react';
import './App.css';
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";

const App = () => {
    const [messages, setMessages] = useState([])
    const handleSend = newMessage => {
        setMessages([newMessage, ...messages])
    }
    return (
        <div className="app">
            <NewMessageForm onSend={handleSend}/>
            <MessageList data={messages} />
        </div>
    );
}

export default App;
