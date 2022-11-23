import React, { useState } from 'react';

const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const inputEvent = (e) => {
        setInputList(e.target.value)
    }
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList("");
    };


    const deleteItems = () => {
        console.log('delete items');
    }

    return (
        <div className="main__div">
            <div className="center__div">
                <br />
                <h1>to do list</h1>

                <br />
                <input value={inputList} onChange={inputEvent} type="text" placeholder="add a items" />
                <button onClick={listOfItems}>+</button>
                <ol>
                    {items.map((itemValue) => {
                        return (
                            <>
                                <button onClick={deleteItems}>-</button>
                                <li> {itemValue} </li>
                            </>
                        )

                    })}
                </ol>
            </div>
        </div >
    )
}

export default App;