import React from "react";
import { RiPencilLine } from "react-icons/all";
import './style.scss'

const CardOfTask = () => {
  return(
    <div className="card-of-task">
      <p className="card-of-task-title">title</p>
      <button className="card-of-task-icon">
        <RiPencilLine />
      </button>
    </div>
  )
};

export default CardOfTask;