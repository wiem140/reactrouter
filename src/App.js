import { useState} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import { Search } from './component/Search';
import {movieData} from "./Data";
import AddMovie from './component/Add';
import { MovieList} from './component/MovieList';
import Contact from './component/Contact';
import About from './component/About';

function App() {
  const [movies, setMovies]= useState(movieData);
  const [ searchTitle,setSearchTitle]= useState("");
  const [searchRating, setSearchRating]= useState(0);
  const [visible, setVisibility] = useState(false);
  const handleClose = () => setVisibility(false);

  return (
    <BrowserRouter>
    <Switch>

    
    <div className="App">
      <Route exact path="/" render={()=> (
        <>
        <div className search><Search setSearchRating={setSearchRating} searchRating={setSearchRating} setSearchTitle ={setSearchTitle} />
        </div>
  < MovieList movies= {movies} searchTitle={searchTitle} searchRating={searchRating} />
  <div className="add">
    <button className= "btn-add" onClick={() => 
    setVisibility(!visible)
    }> Add Movie </button>
  
  { visible? 
  <AddMovie movies={movies} setMovies={setMovies} visible={visible} handleClose={handleClose}/> : null
  }
  </div>
</>
      )}/>
<Route exact path="/Contact" render={()=>(<Contact/>)}/>
  <Route exact path="/About" component={About}/>  
      </div>
  </Switch>
  </BrowserRouter>
  )
}
 
export default App;
