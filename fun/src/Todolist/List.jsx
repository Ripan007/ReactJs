import React from "react";

export const List = (props) => {
  return (
    <div>
      <li>
        {props.text}
        <button>delete</button>
      </li>
      )
    </div>

  }
