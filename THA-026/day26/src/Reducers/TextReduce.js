const textReducer =(state="",action)=>{
   
        if(action.type==="TEXT_C"){
            console.log("text change");
            return action.text;
        }
        
    
};
export default textReducer;