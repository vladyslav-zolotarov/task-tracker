import React, {useState} from "react";
import './style.scss'
import CardOfTask from "./CardOfTask";
import AddNewCard from "./CardOfTask/AddNewCard";
import { MdMoreHoriz, AiFillCloseCircle } from "react-icons/all";

const ListOfTasks =({idList, title, listOfTasks}) =>{

  const [ openFuncContent, setOpenFuncContent ] = useState(false)

  const onToggleFuncContent = () => {
    setOpenFuncContent(true)
  };

  const functionalContent = () =>{
    if(openFuncContent) {
      return (
        <div className="functionalContent">
          <div className="top">
            <p>Actions</p>
            <button onClick={()=>{setOpenFuncContent(false)}} className="butt-close"><AiFillCloseCircle size="20" /></button>
          </div>
          <div className="main">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      )
    } else return null;
  }

  const listOfCards = listOfTasks.map((card, index)=>{
    if(card.id === idList){
      return(
        <CardOfTask task={card.task} idList={idList} key={index} cardId={card.idCard} />
      )
    }
    return <div key={index}></div>
  });

  return (
    <div className="list-task">
      <div className="list-task-title">
        <p>{title}</p>
        <button className="list-task-title-icon" onClick={()=>onToggleFuncContent()}>
          <MdMoreHoriz size="20" />
        </button>
        {functionalContent()}
      </div>
      {listOfCards}
      <AddNewCard idList={idList} />
    </div>
  )
};


export default (ListOfTasks);