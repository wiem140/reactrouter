import React from 'react'
import {Card} from "react-bootstrap"
import '../App.css';
import {Rating} from "@material-ui/lab"
import { Link } from 'react-router-dom';

 export const MovieCard =({movie}) => {
  console.log(movie);
        return (
          
          
<Card style={{ width:"200px", reight:"200px" }}>
  <Card.Img  style={{ width:"200px", reight:"200px"}} variant="top" src ={movie.image} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    
    <Card.Text>{movie.date}</Card.Text>
    <Card.Text>{movie.type}</Card.Text>
    
<Rating name="read-only" value={movie.rating} readOnly/>
<div>
          <Card.Text> <Link to={{pathname:`/Trailer/${movie.name}`,Props:{name:movie.name,Trailer:movie.Trailer}}}>Trailer</Link> </Card.Text>
          <Card.Text> <Link to={{pathname:`/Description/${movie.name}`,Props:{name:movie.name,Description:movie.Description}}}>Description</Link> </Card.Text>

        </div>

  </Card.Body>
</Card>
            
        )
    }

