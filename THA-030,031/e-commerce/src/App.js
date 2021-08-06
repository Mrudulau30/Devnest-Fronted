
import React,{useState,Component} from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Nav } from './components/navbar/nav';
function App() {

  const [login,setLogin]=useState(false)
  return (
    <div className="App">
    
     <Nav />
  
    </div>
  
  );
}

export default App;
