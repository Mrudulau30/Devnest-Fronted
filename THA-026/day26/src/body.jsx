import { useSelector } from "react-redux";

import {useState} from "react";
const Body=()=>{
    const text=useSelector(state=>state.text);
    const mail=useSelector(state=>state.mail);
    return(
        <div className="body">
            <div>Name:{text}</div>
            <div>Mail:{mail}</div>
        </div>

    );
}
export default Body;