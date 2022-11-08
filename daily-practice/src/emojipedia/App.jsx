import React from "react";
import './components/emojipedia.css';
import Entry from './components/Entry';
import emojipedia from './components/emojipedia';
console.log(emojipedia);

function createEntry(emojiTerm) {
    return <Entry key={emojiTerm.id} emoji={emojiTerm.emoji} name={emojiTerm.name} description={emojiTerm.meaning} />

}
function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">

                {emojipedia.map(createEntry)}
            </dl>
        </div>
    );
}

export default App;
