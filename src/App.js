import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode , setMode] =useState('dark');

  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>



    <Navbar tit="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className='container'>
      {/* <About /> */}
    <TextForm headding='enter your text here to analyze ' mode={mode}/>

    </div>

    </>
  );
}

export default App;
