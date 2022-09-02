import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTopRatedMovies } from "../api/tmdb-api";
// import { MoviesContext } from "../contexts/moviesContext";
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch';
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const TopRatedMoviesPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('topRated', getTopRatedMovies)

    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;

    // Redundant, but necessary to avoid app crashing.
    // const favorites = movies.filter(m => m.favorite)
    // localStorage.setItem('favorites', JSON.stringify(favorites))
    
  return (
    <PageTemplate
      title="Top Rated"
      movies={movies}
      action={(movie) => { 
        return <AddToMustWatchIcon movie={movie} />
        // return 
        // <>
        //   <AddToFavoritesIcon movie={movie} />
        //   <AddToMustWatchIcon movie={movie} />
        // </>
      }}
    />
   );
  };
      
      export default TopRatedMoviesPage;
    