
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useState,useEffect} from "react";
import Form from "./components/form";
import WeatherCard from "./components/weatherCard"
function App() {
 

  
  return (
     <div className="App">
     
        <Form />
        <WeatherCard />
        
         
    </div>
  );
}

export default App;
