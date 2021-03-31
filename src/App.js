import React from 'react';
import './App.css';
import NewMessageForm from "./NewMessageForm";

const App = () => {
    const handleSend = newMessage => {}
    return (
        <div className="app">
            <NewMessageForm onSend={handleSend()}/>
        </div>
    );
}

export default App;
