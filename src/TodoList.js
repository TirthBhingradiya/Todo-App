import React from "react";
import { MdDelete } from "react-icons/md";

function Todolist(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <MdDelete
          className="icons2"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        />
      </span>
    </li>
  );
}

export default Todolist;
