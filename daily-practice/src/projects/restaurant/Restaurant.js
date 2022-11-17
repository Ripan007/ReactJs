import React, { useState } from 'react'
import MenuCard from './MenuCard';
import Menu from './menuApi';
const Restaurant = () => {
    const [menuData] = useState(Menu);
    return (
        <>
            <MenuCard menuData={menuData} />
        </>

    )
}

export default Restaurant