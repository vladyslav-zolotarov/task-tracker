import React from 'react';

import '../src/globalStyle/style.scss'

import ListOfLists from "./components/ListOfLists/index";
import ListOfTasks from "./components/ListOfLists/ListOfTasks";
// import Index from "./components/ListOfLists/ListOfTasks";
// import Index from "./components/ListOfLists/ListOfTasks/CardOfTask";
import AddNewListOfLists from "./components/ListOfLists/AddNewListOfLists";

function App() {
  return (
   <div>
     <ListOfLists />
     <AddNewListOfLists />
   </div>

  );
}

export default App;
