import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [mustWatchList, setMustWatch] = useState( [] ) // NEW - array
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

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        mustWatchList,
        addToMustWatch
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;