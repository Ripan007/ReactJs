import React from 'react';
import '../ui/style.css';
import Login from './Login';

// let isLoggedIn = true;

// function renderConditionally() {
//     if (isLoggedIn === true) {
//         return (
//             <h1>Hello</h1>
//         )
//     } else {
//         return (
//             <form className="form">
//                 <input type="text" placeholder="Username" />
//                 <input type="password" placeholder="Password" />
//                 <button type="submit">Login</button>
//             </form>
//         )
//     }
// }

const Main = () => {
    return (
        <>
            <div className="container">
                <Login />



                {/* {renderConditionally()} */}

            </div>
        </>
    )
}

export default Main;