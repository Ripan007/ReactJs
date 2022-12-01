import React from 'react';
import { Home } from './Components/Home';
import { ChatPage } from './Components/ChatPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/chatPage" element={<ChatPage />}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}
