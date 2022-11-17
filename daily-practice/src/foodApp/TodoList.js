/* eslint-disable no-undef */
// use state manage the state within the function component
import React, { useState } from 'react';
function TodoList() {
    const [activity, setActivity] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [listData, setListData] = useState([]);
    function addActivity() {
        // asynchronous work
        // setListData([...listData, activity])
        // console.log(listData);
        // synchronous way work 
        setListData((listData) => {
            const updatedList = [...listData, activity]
            console.log(updatedList);
            setActivity('')
            return updatedList;
        })
    }

    function removeActivity() {
        const updatedListData = listData.filte((elem, id) => {
            return i !== id;
        })

        setListData(updatedListData)

    }


    return (
        <>
            <div className="container">
                <div className="header">To Do List</div>
                <input type="text" placeholder="Add activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p className="list-heading">here is your list:{")"}</p>
                {listData !== [] && listData.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div className="listData">{data}</div>
                                <div className="btn-position"> <button onClick={() => removeActivity(i)}>remove(-)</button>  </div>
                            </p>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default TodoList;