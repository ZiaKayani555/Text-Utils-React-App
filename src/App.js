import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode , setMode] =useState('dark');
  const [alert ,setAlert] = useState(null);
  const [colour , setClour] = useState('green');

  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#293a52';
      showAlert('dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled', 'success');

    }
  }

  const setBackgroundColorr = () => {
    if(document.body.style.backgroundColor === 'green'){
      document.body.style.backgroundColor = 'blue';
      setClour('blue')
    }
    else{
      document.body.style.backgroundColor = 'green';
      setClour('green')

    }
  }
  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type: type,
    })

    setTimeout(() => {
          setAlert(null);
    }, 1500);
  }

  const changegreen = ()=>{
    document.body.style.backgroundColor = '#35C649'
  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
  }


  return (
    <>



      <Navbar tit="TextUtils" mode={mode} toggleMode={toggleMode} setBackgroundColor={setBackgroundColorr} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/>
      <Alert alert={alert}/>
      <div className='container'>
        {/* <About /> */}
        <TextForm headding='enter your text here to analyze ' mode={mode} showAlert={showAlert} />

      </div>

    </>
  );
}

export default App;
