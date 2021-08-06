import React from 'react';
import { Navbar, Container, Nav,FormControl } from 'react-bootstrap';
import {Rating} from '@material-ui/lab';
import { Link } from 'react-router-dom';
import '../App.css';


export const Search = ({ setSearchTitle,searchRating, setSearchRating}) => 
{
    return (
      <div >
        <>
        <Navbar bg="dark" variant="dark">
          <Container>

    <Navbar.Brand> <Link to="/Home"> Home</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link> <Link to="/About"> About</Link></Nav.Link>
      <Nav.Link> <Link to="/Contact"> Contact</Link></Nav.Link>
    </Nav>
    <FormControl
    type="search"
    placeholder="search"
    className="mr-2"
    aria-label="search"
    onChange={(e) => setSearchTitle(e.target.value)}/>
     </Container>

    <Rating name="read-only"
    value={searchRating}
    onChange={(event,newValue)=>{
        setSearchRating(newValue)} }/>
    
    </Navbar>
    </>
    </div>
    )
}