# Assignment1 

Name: Nino Kelehsashvili

Student Number: 20074819

Module: Web App Dev 2

<br>

---

<br>

## Description

Assignment to create a React app for a movie database that displays movie information, sorting movies, and actor information with Storybook support.

<br>

---

<br>

## Main Pages:

### Home page 
> Displays list of movies and filter for movies by name and genre. <em> (Also contains a filter field for filtering by name and genre, an icon button to add to favorites **(Red heart icon appears above the card)**, and a More Information button which redirects to the Movie Details Page)</em>
### Favorite Movies page 
> Displays list of movies tagged as Favorite by the user. <em> (Also Contains an icon button for the user to leave a review, an icon button to remove the movie from favorites and a More Information button) </em>
### Upcoming Movies page 
> Displays a list of upcoming movies. <em>(Also contains icon buttons for adding a movie to a Must Watch list **(Red check icon appears above the card)** for the Must Watch Movies page and the More Information button)</em>
### Must Watch page 
> Displays a list of movies tagged by the user as Must Watch. <em>(Added from the Upcoming Movies page. Also contains icon button for deleting a movie from the Must Watch list)</em>
### Top Rated page 
> Displays a list of movies based on the highest ratings. <em>(Also contains icon buttons for adding a movie to a Must Watch list **(Red check icon appears above the card)** and the More Information button)</em>

<br>

## Additional Pages/Functionality

### Movie Details Page

> Displays detailed information on the movie such as:
> - Genres
> - Time
> - Rating
> - Budget
> - Release Date

<br>

> This page also includes two Flaoting Action Buttons (FAB):
> - Reviews - Dropdown menu displaying all reviews left by users. <em>Also contains a button beside each review to redirect to a page for that full review</em>
> - Cast - Redirects to a new page displaying all Cast Members for the movie.

<br>

### Reviews Page 

> Displays a page containing the full review that was clicked in the Reviews dropdown menu on the Movie Details Page.

<br>

### Movie Credits Page

> The page displayed after a user clicks the Cast botton in the Movie Details Page. 
> - Displays information on the full cast of the specified movie.
> - Contains a More Information button on the cast cards to redirect to a new page with more details on that individual **DOES NOT WORK**

<br>

### Add Movie Review Page

> Redirects from the Favorites Page to a new page for writing a review.
> Contains the fields: 
> - Author's Name
> - Review text
> - Rating Selection dropdown
> - Submission button <em> (Displays green text field for if the review was successfully submitted)</em>
> - Reset Button <em>(Deletes all entered information from the fields to start over)</em>

<br>

---

<br>


## Additional TMDB Endpoints And Paths (For assignment)

<br>

---

<br>


> - Upcoming Movies - movie/upcoming 
> - Top Rated Movies - movie/top_rated
> - Movie Credits - movie/${id}/credits
> - Person - /person ***NOT COMPLETED*** 


<br>

---

<br>

## Additional Storybook Supported Pages (For assignment)

<br>

---

<br>

> - Cast Card - Displays Card for castmember
> - Cast List - Displays list of cast cards to display multiple castmembers
> - Filter Cast Card - Filters Castmembers by movie name
> - Sample Cast Data - Contains metadata information for a cast card
> - Person Details - ***In progress, not completed***

<br>

---

<br>

## Starting and Viewing App

<br>

---

<br>

> #### Movie App
> - Download App 
> - cmd: "npm install" <em>installs/updates npm</em>
> - Create .env file in root folder <em>MOVIESAPP folder</em> - This is used for the TMDP API key to access the movie database .
> - Visit the site https://www.themoviedb.org/ and create a new account to request one in the settings menu
> - Add the following to the .env file:  
REACT_APP_TMDB_KEY=***YourAPIKeyGoesHere***  
FAST_REFRESH=false
> - cmd: "npm start"

<br>

> #### Storybook
> - cmd: "npm run storybook"
> - This should open a new window in your browser to view the Storybook supported pages

<br>

> ***To stop the App or Storybook instance, in the cmd window press ctrl+C***

