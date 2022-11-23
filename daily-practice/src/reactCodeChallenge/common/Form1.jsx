import React, { useState } from 'react';

const Form1 = () => {
    const [fullName, setFullName] = useState({ fName: "", lName: "", email: "", phone: "", qual: "" })



    const eventChange = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;
        const { name, value } = event.target;

        setFullName((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        })

        // setFullName((preValue) => {
        //     if (name === "fName") {
        //         return {
        //             fName: value,
        //             lName: preValue.lName,
        //             phone: preValue.phone,
        //             email: preValue.email,
        //         };
        //     } else if (name === "lName") {
        //         return {
        //             lName: value,
        //             fName: preValue.fName,
        //             phone: preValue.phone,
        //             email: preValue.email,
        //         };
        //     } else if (name === "email") {
        //         return {
        //             email: value,
        //             fName: preValue.fName,
        //             phone: preValue.phone,
        //             lName: preValue.lName,

        //         };
        //     }
        //     else if (name === "phone") {
        //         return {
        //             phone: value,
        //             fName: preValue.fName,
        //             email: preValue.email,
        //             lName: preValue.lName,
        //         }
        //     }
        // })


    }

    return (
        <>
            <h1> {fullName.fName}  {fullName.lName}</h1>
            <p>{fullName.email}  {fullName.phone} {fullName.qual}</p>
            <input name="fName" type="text" onChange={eventChange} placeholder="first name" Value={fullName.fName} />
            <input name="lName" type="text" onChange={eventChange} placeholder="last name" value={fullName.lName} />
            <input name="email" type="email" onChange={eventChange} placeholder="email" value={fullName.email} />
            <input name="phone" type="text" onChange={eventChange} placeholder="number" value={fullName.phone} />
            <input name="qual" type="text" onChange={eventChange} placeholder="qualification" value={fullName.qual} />
            <button>submit</button>
        </>
    )
}

export default Form1;