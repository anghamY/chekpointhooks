import { useState } from "react"

function Filter({title,settitle}){

   console.log(title)
    return(
<input value={title} onChange={(e)=> settitle(e.target.value)} />
    )
}

export default Filter;