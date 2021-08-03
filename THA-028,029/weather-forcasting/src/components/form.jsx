import {useDispatch, useSelector } from "react-redux";
import {updatePlace,updatePlaceData} from "../actions"
const Form =()=>{
    const place=useSelector((state)=>state.place);
    const dispatch=useDispatch();
    return(
        <div className="container">
            <div className="row">
            <div className="col-16 form">
           <input type="text" placeholder="eg:Mumbai" value={place} onChange={(e) =>{
    
    dispatch(updatePlace(e.target.value));
           } }/>
           <button className="btn btn-primary btn btn-one animated-button1" 
           onClick={()=>{
               dispatch(updatePlaceData(place));
           }

           }
           >
            Check
           </button>
           
           
         </div>
        </div>
        </div>
    );
}
export default Form;