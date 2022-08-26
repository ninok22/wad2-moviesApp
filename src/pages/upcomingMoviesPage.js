import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
 

const UpcomingMoviesPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;
  
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => { //render prop's function returns the icon to display in movie cards on the upcoming movies page
        return <PlaylistAddIcon movie={movie} />
      }}
    />
   );
  };
  
  export default UpcomingMoviesPage;


