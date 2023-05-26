import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   

    <Navbar tit="TextUtils" />
    <div className='container'>
    <TextForm headding='enter your text here to analyze '/>

    </div>

    </>
  );
}

export default App;
