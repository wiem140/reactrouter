import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div>
           <button> <Link to="/"> Back to home page</Link></button>
        <h1> Contact</h1>
        <h3> email:test@gmail.com</h3>
        <h3> phone :72506222</h3>
        </div>
    )
}
export default Contact