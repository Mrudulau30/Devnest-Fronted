const PlacedataReducer=(state={},action)=>{
    if(action.type==="UPDATE_PLACE_DATA"){
        return action.place;
    }
    return state;
}

export default PlacedataReducer;