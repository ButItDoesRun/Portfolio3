import './App.css';
//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


// Pages
import AppRouting from './page_components/AppRouting';


function App() {
  // let [val, setVal] = useState([]);
  // let [state, setState] = useState("");

  return (

    <>

      <div className='App'>
        <AppRouting/>
      </div>


    </>
  );
}

export default App;