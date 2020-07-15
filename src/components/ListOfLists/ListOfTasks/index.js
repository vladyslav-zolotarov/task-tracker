import React from "react";
import './style.scss'
import CardOfTask from "./CardOfTask";
import AddNewCard from "./CardOfTask/AddNewCard";
import { MdMoreHoriz } from "react-icons/all";

const ListOfTasks =() =>{
  return (
    <div className="list-task">
      <div className="list-task-title">
        <p>title</p>
        <button className="list-task-title-icon">
          <MdMoreHoriz size="20" />
        </button>
      </div>
      <CardOfTask />
      <CardOfTask />
      <CardOfTask />
      <AddNewCard />
    </div>
  )
};

export default ListOfTasks;