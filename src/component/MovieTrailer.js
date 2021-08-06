import React from 'react';
import YouTube from 'react-youtube';
import '../App.css';
import { Link, useParams } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import {movieData} from '../Data';

const MovieTrailer = () => {
    const {id} = useParams();
   let idmovie = Number(id);
    const movie = movieData.find(el => el.id === idmovie);
    return (
        <div>
            <Button style={{background: "transparent"}} variant="secondary"> 
                <Link className="navlink" exact to="/"> Go Back to Home Page </Link> 
            </Button>
            <div className="ContentModal">
                <img className="image" src={movie.image} alt="image" />
            
            <div className="ContentModal_about">
             
             <YouTube videoId={movie.trailer}  />
            

            </div>
            </div>
            <div className="ContentModal_description">
                
                   <p> {movie.description}</p>
                  </div>
            
        </div>
    );
};

export default MovieTrailer
