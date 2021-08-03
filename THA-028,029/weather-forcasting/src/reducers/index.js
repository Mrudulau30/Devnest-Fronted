import {combineReducers} from "redux";
import PlaceReducer from "./placeReducer";
import PlacedataReducer from "./placedataReducer";

const rootReducer=combineReducers({
    place:PlaceReducer,
    placedata:PlacedataReducer,
});

export default rootReducer;