import React from "react";
import './style.scss'
import { GoPlusSmall } from "react-icons/all";


const AddNewListOfLists = () =>{
  return(
    <div className="add-new-list">
      <button className="add-new-list-butt">
        <GoPlusSmall size="20" />
        <p>Add new list</p>
      </button>
    </div>
  )
};

export default AddNewListOfLists;