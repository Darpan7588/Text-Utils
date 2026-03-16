
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import { BrowserRouter as Router, 
          Routes, 
          Route 
        } from "react-router-dom";    

function App() {
  const [mode, setMode] = useState('light'); //Dark mode enabled or not
  const [alert, setAlert] = useState({msg: null, type: null});

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })  
    setTimeout(() => {
      setAlert({msg: null, type: null});
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3b3b3bff';
      showAlert("Dark mode has been enabled", "success");
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
     {/* <NavBar title="TextUtils" aboutText="About TextUtils"/> */}
     <Router>
     <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
     <Alert alert={alert}/>
     
     {<div className="container my-3">
      
        <Routes>
          <Route exact path="/" element={<TextForm heading= "Enter the text to analyze below: " mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/home" element={<TextForm heading= "Enter the text to analyze below: " mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/About" element={<About mode={mode} />} />
        </Routes>

     </div>}
    </Router>
    </>
  );
}

export default App;
