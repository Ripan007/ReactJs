import React, { createContext, useState } from 'react';
import { Parent } from './Parent';

export const NameContext = createContext();

export const App = () => {
    const [userInfo, setUserInfo] = useState({ name: 'default', role: 'default', batch: 'default' })

    const setUserContext = () => {
        setUserInfo({ ...userInfo, name: 'ripan', role: 'developer', batch: 'linux' })
    }


    return (
        <div>
            <h1>App</h1>
            <NameContext.Provider value={userInfo} >
                <Parent />
            </NameContext.Provider>

            <button onClick={setUserContext}>change context</button>

        </div>
    )
}
