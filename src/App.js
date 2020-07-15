import React from 'react';

import '../src/globalStyle/style.scss'
import './style.scss'

import ListOfLists from "./components/ListOfLists/index";

function App() {
  return (
   <div className="main-content">
     <ListOfLists />
   </div>

  );
}

export default App;
