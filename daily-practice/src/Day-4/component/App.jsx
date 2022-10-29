// split the component into further smaller component
import React from 'react';
import './style.css';
import Card from './Card';
import contact from './contact';
import Avatar from './Avatar';
function App() {
    return (<>
        <Avatar img="https://images.pexels.com/photos/12268516/pexels-photo-12268516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <Card name={contact[0].name} image={contact[0].imageUrl} age={contact[0].age} mail={contact[0].mail} phone={contact[0].phone} />
    </>
    )
}


export default App;