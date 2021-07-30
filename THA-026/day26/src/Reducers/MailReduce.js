const mailReducer =(state=" ",action)=>{

    if(action.type==="MAIL_C"){
        console.log("mail change");
        return action.text;
    }
    return state;
};
export default mailReducer;