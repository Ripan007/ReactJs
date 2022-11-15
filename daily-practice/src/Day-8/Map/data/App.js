import React from 'react';
import Card from './Card';
import emojipedia from './emojipedia';
import '../ui/style.css';
function createEle(contact) {
    return (
        <Card id={contact.id} key={contact.id} emoji={contact.emoji} name={contact.name} meaning={contact.meaning} />

    )
}




const App = () => {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            {emojipedia.map(createEle)}


        </div>
    )
}

export default App;