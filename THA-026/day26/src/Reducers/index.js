import textReducer from "./TextReduce";
import mailReducer from "./MailReduce";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
      text:textReducer,
      mail:mailReducer,
});

export default rootReducer;