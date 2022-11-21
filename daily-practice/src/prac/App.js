import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './route/Home';
import About from './route/About';
import Contact from './route/Contact';
import Login from './route/Login';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;