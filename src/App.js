import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouting from './AppRouting';
import TokenContext from './Context/TokenContext';

function App() {

  return (
    <div className='App'>
        <AppRouting />
    </div>
  );
}

export default App;
