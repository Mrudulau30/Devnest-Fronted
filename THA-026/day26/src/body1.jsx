import { useDispatch } from "react-redux";
import {changeText,changeMail} from "./Action/index";

const Body1=()=>{
    const dispatch = useDispatch();
    return (
        <div className="body1">
          <input
            type="text"
            placeholder="admin"
            onChange={(e) => {
              dispatch(changeText(e.target.value));
            }}
          />
          <input
            type="text"
            placeholder="admin@gmail.com"
            onChange={(e) => {
              dispatch(changeMail(e.target.value));
            }}
          />
        </div>
      );
}

export default Body1;