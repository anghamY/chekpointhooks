import { useState } from "react";

function AddMovie({Film,setFilm}){
    const [title,settitle]=useState("")
    const [image,setimage]=useState("")
    const [text,settext]=useState("")

    const addmovie =()=>{ setFilm(
        [...Film,{Title:title,Image:image,Text:text,id:Math.random()  }]
    )   }
    console.log(title)
    return(
        <div>
            <input value={title}  onChange={(e)=> settitle(e.target.value)} />
             <input value={image} onChange={(e)=> setimage(e.target.value)}   />  
             <input value={text}  onChange={(e)=> settext(e.target.value)}   />                                                
                   <button onClick={addmovie}>add</button>
                   </div>
        
    )
}
export default AddMovie;