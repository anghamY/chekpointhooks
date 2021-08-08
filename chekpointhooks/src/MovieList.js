import CardMovie from "./cards"
import Filter from "./Filter"

function MovieList ({Film,title}){
    
    return(
        <div style={{display:"flex"}} > 
        
        {Film.filter(el=> el.Title.toUpperCase().includes(title.toUpperCase())  )
        
        .map(el=> <CardMovie movie={el}  /> )}
       
        </div>
        

    )
}
export default MovieList