import React, { useState } from 'react';
import Navbar from './Navbar';

import "./App.css";
import TextForm from './TextForm';
import Alert from './Alert';

function App() {

  const [mode, setMode] = useState('light'); 

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");

    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
  }


  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <TextForm mode={mode} showAlert={showAlert} />
     
    </>
  );
}

export default App;
