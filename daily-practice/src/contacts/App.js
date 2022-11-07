import React from 'react';
import Card from './Card';
import contacts from './contacts';
import Avatar from './Avatar';
import './Avatar.css';

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            name={contact.name}
            phoneNo={contact.phoneNo}
            mail={contact.mail}
            image={contact.imageUrl}
        />
    )

}

function App() {
    return (
        <div>
            <Avatar image="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600" />

            <h1>My contacts</h1>
            {/* <Card name={contacts[0].name} image={contacts[0].imageUrl} phoneNo={contacts[0].contactNo} mail={contacts[0].mail} />
            <Card name={contacts[1].name} image={contacts[1].imageUrl} phoneNo={contacts[1].contactNo} mail={contacts[1].mail} />
            <Card name={contacts[2].name} image={contacts[2].imageUrl} phoneNo={contacts[2].contactNo} mail={contacts[2].mail} /> */}
            {contacts.map(createCard)}

        </div>

    )
}
export default App;