import logo from './logo.svg';
import './App.css';
import Router from './Components/Route/Route';
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';



const App = () => {

  const token = localStorage.getItem("token")

  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  
  return (
    <div>
     <BrowserRouter>
     <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
     <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
