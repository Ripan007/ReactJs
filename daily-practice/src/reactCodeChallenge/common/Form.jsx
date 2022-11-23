import React, { useState } from 'react';
import './Fom.css';

const Form = () => {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    });


    const inputEvent = (e) => {
        const value = e.target.value;
        const name = e.target.name;



        setFullName((preValue) => {
            console.log(preValue);
            if (name === "fName") {
                return {
                    fName: value,
                    lName: preValue.lName,
                };
            } else if (name === 'lName') {
                return {
                    fName: preValue.fName,
                    lName: value,
                };
            }

        })


    }
    const submits = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <form onSubmit={submits}>
                <h1>{fullName.fName} {fullName.lName}</h1>
                <input name="fName" onChange={inputEvent} type="text" placeholder="enter your firstName" value={fullName.fName} />
                <input name="lName" onChange={inputEvent} type="text" placeholder="enter your lastName" value={fullName.lName} />

                <button type="submit" >submit</button>
            </form>


        </>
    )
}

export default Form;