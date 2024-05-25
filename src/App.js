import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

 const API_URL = `http://www.omdbapi.com/?apikey=ae04a124`;

 const movie1 ={
        "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
 }

 
const App = () => {
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies(`Spiderman`);

    }, []);
    
    return (
    <div className="app">
        <h1>Movie Land</h1>
        <div className="search">
        <input placeholder="Search for movies"
        value="Superman"
        onChange={() => {}}
         />
         <img
         src={SearchIcon}
         alt="search"
         onClick={() => {}}
         />
        </div>

        {
            movies?.length > 0
            ? (
                 <div className="container" >
                   {movies.map((movie) => (
                    <MovieCard movie={movie} />
                   ))}
                   </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                    </div>
            )
        }    
    </div>
    );
}

export default App;
/* if you want to display more then 10 movies you can adjust the function searchMovies to this one
const searchMovies = async (search, pages = 100) => {
    let allMovies = [];
    for (let page = 1; page <= pages; page++) {
      const response = await fetch(`${API_URL}&s=${search}&page=${page}`);
      const data = await response.json();
      if (data.Search) {
        allMovies = allMovies.concat(data.Search);
      } else {
        break; // Stop if no more results
      }
    }
    setMovies(allMovies);
  }
*/





//<img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
      //alt="search"
      //onClick={() => searchMovies(searchTerm)}
    ///>