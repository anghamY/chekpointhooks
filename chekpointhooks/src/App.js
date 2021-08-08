import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Card, useAccordionButton } from 'react-bootstrap';
import './App.css';
import CardMovie from './cards';
import MovieList from './MovieList';
import StarRatingComponent from 'react-star-rating-component';
import AddMovie from './add';
import Filter from './Filter';
import Rate  from './rate';

function App() {
  const [Film,setFilm] = useState (
    [ 
    {id :"001", Image:"/Sam.jpg",Title:"Sam",Text:"Disponible maintenant"} ,
    {id :"002", Image:"/Old.jpg",Title:"Old",Text:"Disponible maintenant"},
    {id :"003", Image:"/Titane.jpg",Title:"Titane",Text:"Disponible maintenant"},
    ]

  )
  const [title,settitle]=useState("")
  

  return (
    <div>

    <AddMovie Film={Film} setFilm={setFilm}/>
     <MovieList Film={Film}   title={title} />
     <Filter   title={title} settitle={settitle} />
     <Rate />

    </div>
  );
}

export default App;
