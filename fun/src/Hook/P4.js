import React, { useState } from "react";

export const P4 = () => {
  const [profile, setProfile] = useState({
    name: "janvi",
    age: 23,
    role: "programmer",
  });

  function change() {
    setProfile({ ...profile, name: "shakti" });
  }
  return (
    <>
      <p>
        name is {profile.name} and age is {profile.age} and role is{" "}
        {profile.role}{" "}
      </p>
      <button onClick={change}>changeName</button>
    </>
  );
};

// * spread operator
