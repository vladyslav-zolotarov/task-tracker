import React from "react";
import './style.scss'
import CardOfTask from "./CardOfTask";
import AddNewCard from "./CardOfTask/AddNewCard";
import { MdMoreHoriz } from "react-icons/all";

const ListOfTasks =({idList, title, listOfTasks}) =>{



  const listOfCards = listOfTasks.map((card, index)=>{
    if(card.id === idList){
      return(
        <CardOfTask task={card.task} idList={idList} key={index} />
      )
    }
    return <div key={index}></div>
  });

  return (
    <div className="list-task">
      <div className="list-task-title">
        <p>{title}</p>
        <button className="list-task-title-icon">
          <MdMoreHoriz size="20" />
        </button>
      </div>
      {listOfCards}
      <AddNewCard idList={idList} />
    </div>
  )
};


export default (ListOfTasks);