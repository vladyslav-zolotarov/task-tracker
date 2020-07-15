import React from "react";
import './style.scss'
import { GoPlusSmall } from "react-icons/all";

const AddNewCard = () => {
  return(
    <div className="add-new-card">
      <button className="add-new-card-butt">
        <GoPlusSmall size="20" />
        <p>Add new card</p>
      </button>
    </div>
  )
};

export default AddNewCard;