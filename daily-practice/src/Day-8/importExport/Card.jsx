import React from 'react'
// import  { add, substract, multiply, division } from './calculator';
import *  as cal from './calculator';

const Card = () => {
    return (
        <>
            {/* {add(2,4)}
        {substract(2,4)}
        {multiply(2,4)}
        {division(2,4)}
         */}

            {cal.add(3, 6)}
            <p>    {cal.multiply(3, 6)}</p>
            {cal.substract(3, 6)}

            {cal.division(3, 6)}
        </>
    )
}

export default Card;