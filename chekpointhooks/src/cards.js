
import {Card , Button } from "react-bootstrap"



function CardMovie ({movie}){
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.Image} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
     {movie.Text}
    </Card.Text>
    <Button variant="primary">Watsh now !</Button>
  </Card.Body>
</Card>
        </div>
    )
}
 export default CardMovie ;