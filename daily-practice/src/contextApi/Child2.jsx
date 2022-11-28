import React, { useContext } from 'react';
import { NameContext } from './App';



export const Child2 = () => {
    const nameValue = useContext(NameContext);

    return (
        <p>Child2  {nameValue.role} {nameValue.name}  {nameValue.batch}</p>
    )
}


