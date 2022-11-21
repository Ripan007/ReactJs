import React from 'react';
import Square from './colorPicker/content/Square';
import Input from './colorPicker/content/Input';
import { useState } from 'react';
import './colorPicker/ui/color.css';
const App = () => {
    const [colorValue, setColorValue] = useState('');
    return (
        <>
            <Square colorValue={colorValue} />
            <Input colorValue={colorValue} setColorValue={setColorValue} />
        </>
    )
}

export default App;