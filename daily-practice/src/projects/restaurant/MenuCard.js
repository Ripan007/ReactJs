import React from 'react'

export const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
            {menuData.map((currEle) => {
                return (
                    <section className="main-card--container" key={currEle.id}>
                        <div className="card-container">
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{currEle.id}</span>
                                    <div className="card-author subtle">{currEle.name}</div>
                                    <h2 className="card-title">{currEle.name}</h2>
                                    <span className="card-description subtle"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni. </span>
                                    <div className="card-read">read</div>
                                </div>
                                <img src={currEle.image} alt="" />
                                <span className="card-tag">order now</span>
                            </div>
                        </div>
                    </section>

                )

            })}


        </>
    )
}

export default MenuCard;