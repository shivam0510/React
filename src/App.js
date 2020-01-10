import React, { useState }  from 'react';
import logo from './logo.svg';
//import './App.css';
import LoginComponent from "./components/LoginComponent"
import './App.sass';
import Dashboard from './components/Dashboard'

function App() {
  const [showDashbord, setDashbord] = useState(false);
  const [name, setName] = useState("");

  function onChange(newValue,newName) {setDashbord(newValue); setName(newName);}

  return (
    <div className="App">
      <div style = {{display : showDashbord && "none"}}>
        <LoginComponent onLogin={onChange}/>
      </div>
      <div style = {{display : !showDashbord && "none"}}>
        <Dashboard showDashbord={showDashbord} name={name} />
      </div>
      
    </div>
  );
}

export default App;
