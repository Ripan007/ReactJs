import React, { useState } from "react";

export const P5 = () => {
  const bio = [
    { id: 1, name: "mohit" },
    { id: 2, name: "shakti" },
    { id: 3, name: "mohan" },
  ];
  const [profile, setProfile] = useState(bio);

  function deleteItem(id) {
    const newArray = profile.filter((ele) => {
      return ele.id != id;
    });
    setProfile(newArray);
  }

  function deleteAll() {
    setProfile([]);
  }
  return (
    <>
      {profile.map((currEle) => {
        return (
          <p key={currEle.id}>
            name is {currEle.name}
            <button onClick={() => deleteItem(currEle.id)}>delete</button>
          </p>
        );
      })}
      <button onClick={deleteAll}>deleteAll</button>
    </>
  );
};

// ? task
// ? using map iterate over the array
// ? function to empty the array
// ? create deletion function
