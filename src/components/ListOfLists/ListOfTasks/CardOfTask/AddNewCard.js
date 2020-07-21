import React, { useState } from "react";
import './style.scss'
import { GoPlusSmall } from "react-icons/all";
import { connect  } from 'react-redux'
import { addNewListOfTasks} from "../../../../actions";
import {v1} from "uuid";


const AddNewCard = ({listOfTasks ,addNewListOfTasks, idList}) => {


  const [inputValue, setInputValue] = useState('');
  const [active, setActive] =useState(false);

  const onSubmit = () => {
    if(inputValue !== ''){
      addNewListOfTasks({id: idList, idCard: v1(), task: inputValue});
      setInputValue('');
      setActive(false);
    }
  };

  const content = () => {
    if(!active){
      return(
        <div className="add-new-card">
          <button
            onClick={()=>setActive(true)}
            className="add-new-card-butt"
          >
            <GoPlusSmall size="20" />
            <p>Add new card</p>
          </button>
        </div>
      )
    }
    else{
      return (
        <div className="add-new-card-input-main">
          {/*<div className="add-new-list-input-main">*/}

            <textarea
              value={inputValue}
              onChange={e=>setInputValue(e.target.value)}
              autoFocus={true}
              placeholder="Type in task..."
              className="add-new-card-input"
              type="text"/>
            <button
              className="add-new-card-add-butt"
              onClick={()=>onSubmit()}
            >Add list</button>
          {/*</div>*/}
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

const mapStateToProps = state => {
  return {
    listOfTasks: state.listOfTasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewListOfTasks: card => dispatch(addNewListOfTasks(card))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCard);