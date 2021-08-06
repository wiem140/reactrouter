import React from 'react'
import { Search } from './Search';
import { Link } from "react-router-dom";

const Description = (props) => {
    return (    
        <div>
          
            <Search/>
            <Link to="/">bac to home</Link> 
            <h1>{props.location.Props.name}</h1>
            <p>{props.location.Props.Description}</p>
            </div>
    )
}

export default Description