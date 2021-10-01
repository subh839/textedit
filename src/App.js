
import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, {useState} from 'react';

function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert] =useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  
  setTimeout(()=>{
    setAlert(null);
  },5000);
}
  const toglemode=()=>{
    if(mode==='light'){
    setMode('dark');
  document.body.style.backgroundColor='grey';
  showAlert("Dark mode","success");
 
  setInterval(()=>{
    document.title="TextEditor - Dark Mode";
  },2000);
  }
    else{
setMode('light');

document.body.style.backgroundColor='white';
showAlert("Light mode","success");
setInterval(()=>{
  document.title="TextEditor - Light Mode";
},2000);
    }
  }
  return (
    <>
     {<Navbar title="Text Editor" mode={mode} toglemode={toglemode}/>}
     <Alert alert={alert}/>
     <div className="container my-3">
         <Textform showAlert={showAlert}heading="Enter the text" mode={mode}/>
     </div>
    </>
    );
}

export default App;