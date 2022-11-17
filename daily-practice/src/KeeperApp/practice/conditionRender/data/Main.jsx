import React from 'react';
import '../ui/style.css';
// import Login from './Login';

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


const currentHour = new Date().getHours();


const Main = () => {
    return (
        <>
            <div className="container">
                {/* {isLoggedIn === true ? <h1> hello</h1> : <Login />} */}
                {currentHour > 19 ? <h1>why you are  still lazy , wake up dude</h1> : null}




                {/* {renderConditionally()} */}

            </div>
        </>
    )
}

export default Main;