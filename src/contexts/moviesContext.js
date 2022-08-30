import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  //storing only selected movie id in the mustWatchList array
  const [mustWatchList, setMustWatch] = useState( [] ) // NEW - array e4
  const [myReviews, setMyReviews] = useState( {} ) // NEW - function
  const [favorites, setFavorites] = useState( [] ) // - array

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => { // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [];
    if (!mustWatchList.includes(movie.id)){
      newMustWatch = [...mustWatchList, movie.id];
    }
    setMustWatch(newMustWatch)
  };

  const RemoveFromMustWatch = (movie) => {
    setMustWatch(mustWatchList.filter(
      (mId) => mId !== movie.id
    ))
  }

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        mustWatchList,
        addToMustWatch,
        RemoveFromMustWatch
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;