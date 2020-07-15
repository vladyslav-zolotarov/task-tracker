import React from "react";
import './style.scss'
import ListOfTasks from "./ListOfTasks";
import AddNewListOfLists from "./AddNewListOfLists";

const ListOfLists = () => {
  return(
    <div className="list-list">
      <ListOfTasks />

      <AddNewListOfLists />
    </div>
  )
};

export default ListOfLists;