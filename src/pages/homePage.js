import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

//   return (
//     <PageTemplate
//       title="Discover Movies"
//       movies={movies}
//       selectFavorite={addToFavorites}
//     />    
//   );
// };

return (
  <PageTemplate
    title="Discover Movies"
    movies={movies}
    action={(movie) => { //render prop's function returns the icon to display in movie cards on the home page
      return <AddToFavoritesIcon movie={movie} />
    }}
  />
);
};

export default HomePage;



// import React, { useState, useEffect } from "react";
// import PageTemplate from '../components/templateMovieListPage'
// import { getMovies } from "../api/tmdb-api";

// const HomePage = (props) => {
//   const [movies, setMovies] = useState([]);
//   const favorites = movies.filter(m => m.favorite)
//   localStorage.setItem('favorites', JSON.stringify(favorites))

//   const addToFavorites = (movieId) => {
//     const updatedMovies = movies.map((m) =>
//       m.id === movieId ? { ...m, favorite: true } : m
//     );
//     setMovies(updatedMovies);
//   };

//   useEffect(() => {
//     getMovies().then(movies => {
//       setMovies(movies);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <PageTemplate
//       title='Discover Movies'
//       movies={movies}
//       selectFavorite={addToFavorites}
//     />
//   );
// };
// export default HomePage;
