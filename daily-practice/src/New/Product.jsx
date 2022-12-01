import React from 'react';

export const Product = () => {
    let product;
    let chossenPoduct = 'ppliances';

    if (chossenPoduct === 'grocerry') {
        product = <h2>buy grocerry </h2>
    } else if (chossenPoduct === 'appliances') {
        product = <h2>but appliances</h2>
    } else {
        product = <h2>nothing to buy</h2>
    }
    return (
        <>
            {product}

        </>
    )
}
