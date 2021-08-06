import React from 'react'
import { Search } from './Search';
import { Link } from "react-router-dom";


function Trailer(props) {

    return (
        <div>
           
        <Search/>
        <Link to="/">bac to home</Link> 
        <h1>{props.location.Props.name}</h1>
        <iframe width="560" height="315"  src={props.location.Props.Trailer} ></iframe>
        </div>
    )
}

export default Trailer