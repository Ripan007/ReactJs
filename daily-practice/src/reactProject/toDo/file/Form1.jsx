import React, { useState } from 'react';
import Form2 from './Form2';
const Form1 = () => {
    const [user, setUser] = useState({ username: '', message: '', phone: '' });
    const [show, setShow] = useState(false);

    const getUserInfo = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })

    }

    const submits = (e) => {
        setShow(true)
        e.preventDefault();
        console.log(user);
    }

    const getValue = (val) => {
        console.log(`getting the  value  as ${val}`);
    }
    return (
        <>
            <form onSubmit={submits}>
                <label htmlFor="username">username:</label>
                <input onChange={getUserInfo} type="text" id="username" name="username" placeholder="username" />
                <br />
                <label htmlFor="message">message:</label>
                <input onChange={getUserInfo} type="text" id="message" name="message" placeholder="message" />
                <br />
                <label htmlFor="phone">phone:</label>
                <input onChange={getUserInfo} type="text" id="phone" name="phone" placeholder="phone" />
                <br />
                <button>submit</button>
            </form>
            {show && <section>
                {/* <p>name:{user.username}</p>
                <p>message:{user.message}</p>
                <p>phone:{user.phone}</p> */}
                <Form2 cToP={getValue} name={user.username}
                    message={user.message.message}
                    phone={user.phone} />

            </section>}
        </>
    )
}

export default Form1;