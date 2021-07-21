
import React,{useState,Component} from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Profile from './components/Profile'
import Dashboard from './components/Dashboard';
import Assemble from './components/assemble';
function App() {

  const [login,setLogin]=useState(false)
  return (
    <div className="App">
    
     <Router>
       <Assemble login={login} setLogin={setLogin}/>
    <Switch>
         <Route exact path="/home">
           <Home login={login} setLogin={setLogin}/>
         </Route>
         
         <Route exact path='/about'>
           <About />
         </Route>

         <Route exact  path='/dashboard'>
           <Dashboard />
         </Route>

         <Route path="/profile">
           <Profile />
         </Route>
         </Switch>
         </Router>
  
    </div>
  
  );
}

export default App;
