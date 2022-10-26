import React from 'react';
import Card from './contact/Card';
import contacts from './contact/contacts.js';
import '../style.css';
function App() {
    return (<>
        <h1 className="heading">my contacts</h1>
        <Card name={contacts[0].name} img={contacts[0].imageUrl} tel={contacts[0].tel} mail={contacts[0].mail} />
        <Card name={contacts[1].name} img={contacts[1].imageUrl} tel={contacts[1].tel} mail={contacts[1].mail} />
        <Card name={contacts[2].name} img={contacts[2].imageUrl} tel={contacts[2].tel} mail={contacts[2].mail} />
    </>


    )
}

export default App;