import { useSelector } from "react-redux";
const WeatherCard =()=>{
    const placedata=useSelector((state)=>state.placedata);
    return(
        <div className="container">
            <div className="row">
            <div className="offset-md-4 col-20">
           <div className="card">
            
             {placedata.location ? 
             (<div > 
               <img src={placedata.current.condition.icon} alt="" />
               <div className="temp">{placedata.current.temp_c}°</div>
               <div className="data2">{placedata.current.condition.text}</div>
               <div className="data1">{placedata.location.name}</div>
               <div className="container extra">
                 <div className="row">
                    <div className="col"> 
                    <div className="title">Wind Now</div>
                    <div className="title_data"> {placedata.current.wind_kph}<span className="unit">km</span></div>
                    </div>
                    <div className="col">
                    <div className="title">Humidity</div>
                    <div className="title_data">{placedata.current.humidity}<span className="unit">%</span></div>
                    </div>
                    <div className="col">
                    <div className="title">Precipitation</div>
                    <div className="title_data">{placedata.current.precip_in}<span className="unit">%</span></div>
                    </div>
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
    )
}
export default WeatherCard;