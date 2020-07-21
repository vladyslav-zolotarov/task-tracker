import React from "react";
import './style.scss'
import ListOfTasks from "./ListOfTasks";
import AddNewListOfLists from "./AddNewListOfLists";
import { connect  } from 'react-redux'
import {addNewListOfLists, addNewListOfTasks} from "../../actions";

const ListOfLists = ({ listOfLists,listOfTasks, addNewListOfLists, addNewListOfTasks }) => {

    const list = listOfLists.map((list, index)=>{
      return(
        <ListOfTasks idList={list.id}  listOfTasks={listOfTasks} title={list.title} key={index} />
      )
    });

  return(
    <div className="list-list">
      {list}
      <AddNewListOfLists addNewListOfLists={addNewListOfLists}/>
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
    addNewListOfLists: listOfLists => dispatch(addNewListOfLists(listOfLists)),
    addNewListOfTasks: card => dispatch(addNewListOfTasks(card))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfLists);