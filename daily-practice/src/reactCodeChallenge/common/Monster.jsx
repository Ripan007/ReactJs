import React from 'react';
import Card from './Card';
import data from './data';


const Monster = () => {
    return (
        <Card image={data[2].imageUrl} describe={data[2].description} />
    )
}

export default Monster;