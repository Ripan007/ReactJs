import React from 'react';
import Card from './Card';
import contacts from './contacts';
import Avatar from './Avatar';
import './Avatar.css';

function App() {
    return (
        <div>
            <Avatar image="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600" />

            <h1>My contacts</h1>
            <Card name={contacts[0].name} image={contacts[0].imageUrl} phoneNo={contacts[0].contactNo} mail={contacts[0].mail} />
            <Card name={contacts[1].name} image={contacts[1].imageUrl} phoneNo={contacts[1].contactNo} mail={contacts[1].mail} />
            <Card name={contacts[2].name} image={contacts[2].imageUrl} phoneNo={contacts[2].contactNo} mail={contacts[2].mail} />


        </div>

    )
}
export default App;