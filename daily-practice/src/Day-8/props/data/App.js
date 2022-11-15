import React from 'react';
import Card from './Card';
import contact from './contact';
import '../ui/style.css';
import Avatar from './Avatar';
import Heading from './Heading';

function createEle(con) {
    return <Card id={con.id} key={con.id} name={con.name} image={con.imageUrl} contact={con.contact} mail={con.mail} />
}


const App = () => {
    return (

        <>
            <Heading />

            <Avatar image="https://cdn.pixabay.com/photo/2022/10/23/22/45/highway-7542272__480.jpg" />

            {contact.map(createEle)}

            {/* <Card name={contact[0].name} image={contact[0].imageUrl} contact={contact[0].contact} mail={contact[0].mail} />
            <Card name={contact[1].name} image={contact[1].imageUrl} contact={contact[1].contact} mail={contact[1].mail} />
            <Card name={contact[2].name} image={contact[2].imageUrl} contact={contact[2].contact} mail={contact[2].mail} /> */}
        </>


    )
}

export default App;