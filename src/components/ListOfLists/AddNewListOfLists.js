import React, {useState} from "react";
import './style.scss'
import { GoPlusSmall, MdClose } from "react-icons/all";
import { v1 } from "uuid";


const AddNewListOfLists = ({addNewListOfLists}) =>{

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] =useState(false);

  const onSubmit = () => {
    if(inputValue !== ''){
      addNewListOfLists({id: v1(), title: inputValue});
      setInputValue('');
      setActive(false);
    }
  };

  const content = () => {
    if(!active){
      return(
        <div className="add-new-list">
          <button
            onClick={()=>setActive(true)}
            className="add-new-list-butt">
            <GoPlusSmall size="20" />
            <p>Add new list</p>
          </button>
        </div>
      )
    }
    else{
      return (
        <div className="display-table">
          <div className="add-new-list-input-main">
            <input
              value={inputValue}
              onChange={e=>setInputValue(e.target.value)}
              autoFocus={true}
              placeholder="Type in name of list"
              className="add-new-list-input"
              type="text"/>
            <button
              className="add-new-list-add-butt"
              onClick={()=>onSubmit()}
            >Add list</button>
          </div>
        </div>
      )
    }
  };


  return(
    <>
      {content()}
    </>
  )
};

export default AddNewListOfLists;