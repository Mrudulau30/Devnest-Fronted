import { useState } from "react";


const Meme = ({meme , setMeme}) => {

    const[form,setForm]=useState({
          template_id:meme.id,
          username:"meme_project",
          password:"meme12345", 
          boxes:[],
    });
    const generateMeme =() =>{ 

    };
  return  (<div className="meme">
      <img src={meme.url} alt=" "/>
      {/* this is for text box */}
      <div> 
          {[...Array(meme.box_count)].map((_,index) => (
              <input type="text" placeholder={`Meme caption ${index+1}`} 
              onChange={(e)=>
            {
                const newBoxes=form.boxes;
                newBoxes[index]={text:e.target.value}
                setForm({...form,boxes:newBoxes})
            }}/>
          )
          )}
      </div>
      <div>
          <button onClick={generateMeme()}>Generate Meme</button>
          <button onClick={()=>{
                  setMeme(null);
              }
          }>Choose Another Template</button>
      </div>
  </div>
  );
};

export default Meme