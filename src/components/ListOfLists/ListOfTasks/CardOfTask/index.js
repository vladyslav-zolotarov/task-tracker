import React, {useEffect, useState} from "react";
import { RiPencilLine,MdClose,MdCheck } from "react-icons/all";
import './style.scss'
import { connect  } from 'react-redux'
import { deleteListOfTasks, renameListOfTasks } from "../../../../actions";


const CardOfTask = ({idList,cardId, task, deleteListOfTasks, renameListOfTasks}) => {

  const [removeLook, setRemoveLook] = useState(false);
  const [valueInput, setValueInput] = useState('');

  useEffect(()=>{
    setValueInput(task)
  }, []);


  const contentEdit = () => {
    if(removeLook)return(
      <>
        <input autoFocus={true} onFocus={e=>e.target.select()} className="update-input" type="text" value={valueInput} onChange={(e)=>setValueInput(e.target.value)} />
        <button className="update-accept"
                onClick={()=>{renameListOfTasks({id: idList,idCard: cardId,task: valueInput});
                              setRemoveLook(false)}}
        >
          <MdCheck />
        </button>
        <button className="update-decline" onClick={()=>{setRemoveLook(false)}}>
          <MdClose />
        </button>
      </>
      );
    else return(
      <>
        <p className="card-of-task-title">{task}</p>
        <button onClick={()=>{setRemoveLook(true)}} className="update-button">
          <RiPencilLine />
        </button>
        <button onClick={()=>deleteListOfTasks(cardId)} className="card-of-task-icon">
          <MdClose />
        </button>
        </>
    )
  };


  return(
    <div className="card-of-task">
      {contentEdit()}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    listOfLists: state.listOfLists,
    listOfTasks: state.listOfTasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteListOfTasks: listOfTasks => dispatch(deleteListOfTasks(listOfTasks)),
    renameListOfTasks: listOfTasks => dispatch(renameListOfTasks(listOfTasks))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(CardOfTask);