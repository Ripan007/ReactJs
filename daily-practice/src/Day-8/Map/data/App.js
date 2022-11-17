import React from 'react';
import Card from './Card';
import emojipedia from './emojipedia';
import '../ui/style.css';




const App = () => {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            {emojipedia.map(contact =>

                <Card id={contact.id} key={contact.id} emoji={contact.emoji} name={contact.name} meaning={contact.meaning} />
            )
            }


        </div>
    )
}

export default App;