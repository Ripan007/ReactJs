import React from "react";
import Form from "./data/Form";
import './ui/style.css';

var userIsRegistered = true;

function App() {
    return (
        <div className="container">
            <Form isRegister={userIsRegistered} />
        </div>
    );
}

export default App;
