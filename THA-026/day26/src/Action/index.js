const changeText=(name1)=>{
    return{
        type:"TEXT_C",
        text:name1,
    }
};

const changeMail=(mail1)=>{
    return{
        type:"MAIL_C",
        text:mail1,
    }
};

export{changeText,changeMail};