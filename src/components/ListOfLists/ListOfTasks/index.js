import React from "react";

import './style.scss'
import CardOfTask from "./CardOfTask";

const ListOfTasks =() =>{
  return (
    <div className="list-task">
      <h1>Title of tasks</h1>
      <CardOfTask />
      <button>Add new Card</button>
    </div>
  )
};

export default ListOfTasks;