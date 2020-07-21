import { combineReducers } from "redux";


const initialState = {
  lists:[
    // {id: 1, title: 'Do zrobienia'},
    // {id: 2, title: 'Do zrobienia'}
  ],
  tasks:[]
};

const showListOfListsReducer = (state = initialState.lists, action) =>{
  // switch(action.type){
  //   case 'ADD_NEW_LIST_OF_LISTS':
  //     return [
  //       ...state,
  //       {
  //         id: action.id,
  //         title: action.title
  //         // title:action.title
  //       }
  //     ];
  //   default:
  //     return state;
  // }
  if (action.type === 'ADD_NEW_LIST_OF_LISTS') {
    return [
      ...state,
      {
        id: action.id,
        title: action.title
      }
    ];
  } else {
    return state;
  }
};

const showListOfTasksReducer = (state = initialState.tasks, action) => {
  if (action.type === 'ADD_NEW_LIST_OF_TASKS') {
    return [
      ...state,
      {
        id: action.id,
        idCard: action.idCard,
        task: action.task
      }
    ];
  } else {
    return state;
  }
};


export default combineReducers({
  listOfLists: showListOfListsReducer,
  listOfTasks: showListOfTasksReducer
  // addNewListOfLists: addNewListOfListsReducer
})

