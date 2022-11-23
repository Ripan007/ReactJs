import React from 'react';
import Card from './Card';
import data from './data';


const Dark = () => {
    return (
        <Card image={data[1].imageUrl} describe={data[1].description} />
    )
}

export default Dark;