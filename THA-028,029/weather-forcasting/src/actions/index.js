import {useDispatch } from "react-redux";
const updatePlace=(place)=>{
    return{
        type:"UPDATE_PLACE",
        payload:place,
    };
};

const updatePlaceData=(place)=>{
    return (dispatch)=>{
        fetch(
            ` http://api.weatherapi.com/v1/current.json?key=cab8dbdf1e584c87932114154210208&q=${place}`
            )
           .then((res)=>res.json())
          .then((data)=>{
        
        dispatch({
            type:"UPDATE_PLACE_DATA",
            payload:data,
            
        });
          });
        
    };
};

export {updatePlace,updatePlaceData};
