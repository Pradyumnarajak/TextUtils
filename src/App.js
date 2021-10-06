import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";






function App() {
 const [mode, setMode] = useState('Light'); //wherter dark mode is enabled or not
 const toggleMode = ()=>{
    // eslint-disable-next-line
   if (mode == 'light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
   }
else{
  setMode('light')
  document.body.style.backgroundColor='white';
 }
}
  return (
<> 
{/* <Navbar title="TextUtils" aboutText="about us"/> */}
{/* <Navbar/> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert="this is alert"/>
<div className="container">
{/* <Switch> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/"> */}
          <TextForm heading="Enter the text to analayse below" mode={mode}/> 
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router> */}

</>   
  );
}

export default App;
