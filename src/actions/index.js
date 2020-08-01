// export const addNewCard = newCard =>{
//   return{
//     type: 'ADD_NEW_CARD',
//     payload: newCard
//   }
// };

export const addNewListOfLists = ({id, title}) =>{
  return{
    type: 'ADD_NEW_LIST_OF_LISTS',
    id,
    title
  }
};


export const addNewListOfTasks = ({id, idCard, task}) =>{
  return{
    type: 'ADD_NEW_LIST_OF_TASKS',
    id,
    idCard,
    task
  }
};


export const renameListOfTasks = ({id, idCard, task}) =>{
  return{
    type: 'RENAME_LIST_OF_TASKS',
    id,
    idCard,
    task
  }
};

export const deleteListOfTasks = (idCard) =>{
  return{
    type: 'DELETE_LIST_OF_TASKS',
    idCard
  }
};