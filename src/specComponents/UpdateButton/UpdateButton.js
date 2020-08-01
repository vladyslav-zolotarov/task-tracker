import React, {useState} from "react";
import {RiPencilLine, MdClose} from "react-icons/all";
import './style.scss'

const UpdateButton = ({onClickDelete, cardId})=>{
  const [open, setOpen] = useState(false);

  const onOpen = () =>{
    // setOpen(true);


  };

  const openContent = () =>{
    return(
      <div className="opened">
        <div className="opened-menu">
          <p>MENU</p>
          <button className="opened-menu-butt">
            <MdClose />
          </button>
        </div>
        <button className="rename">Rename</button>
        <button onClick={()=>onClickDelete(cardId)} className="delete">Delete</button>
      </div>
    )
  };


  return(
    <>
      <button onClick={()=>onOpen()} className="update-button">
        <RiPencilLine />
      </button>

      {open ? openContent() : null}
    </>
  )
};

export default UpdateButton;