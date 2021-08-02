
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useState,useEffect} from "react";
function App() {
 
  const[place,setPlace]=useState("");
  const[placedata,setPlacedata]=useState({});
  const updatePlaceData=()=>{
      fetch(`http://api.weatherapi.com/v1/current.json?key=cab8dbdf1e584c87932114154210208&q=${place}`)
      .then(res=>res.json())
      .then((data)=>{
        console.log(data.city);
        setPlacedata(data);
      });
    
  }
  
  return (
     <div className="App">
     <div className="container">
       <div className="row">
         <div className="col-16 form">
           <input type="text" placeholder="eg:Mumbai" value={place} onChange={(e) =>{
           setPlace(e.target.value);
           }
           }></input>
           <button className="btn btn-primary" onClick={updatePlaceData}> Check</button>
           {/* {place} */}
         </div>
         </div>
         <div className="hello  weather">
           <div className="card">
             {placedata.location ? 
             (<div > 
               <img src={placedata.current.condition.icon} alt="" />
               <div className="temp">{placedata.current.temp_c}°</div>
               <div className="data1">{placedata.location.name}</div>
               <div className="container">
                 <div className="row">
                    <div className="col-3"> 
                    <div className="title">Wind Now </div>
                    <div className="title_data">34 <span className="unit">km</span></div>
                    </div>
                    <div className="col-3">

                    </div>
                    <div className="col-3"></div>
                   
                 </div>
               </div>
               </div>
              
              )
             :
             (<h1>Enter valid city name</h1>)}
           </div>


         </div>
       
     </div>
    </div>
  );
}

export default App;
