import React, {useState } from "react";
import ActorName from './ActorName';
import DirectorName from './DirectorName';
import MovieTitle from './MovieTitle';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';




const SearchPage = () => {

  //states declarations
  //Setting original state of movies and movie id

const [enteredMovieTitle, setEnteredMovieTitle] = React.useState('');
const [enteredActorName, setEnteredActorName] = React.useState('');
const [enteredDirectorName, setEnteredDirectorName] = React.useState('');
const [searchResults, setSearchResults] = useState([]);

  //error state
const [searchError, setSearchError] = React.useState(false);
//search button clicked state
const [searchValue, setSearchValue] = React.useState(false);
//display review state to check if it should be reset or not
const [completedSearch, setCompletedSearch] = React.useState([]);
//state for current user id, starts at 0
//const [userID, setUserID] = React.useState(1);



  //constants and functions declarations

  //Selection/Input Handlers
  const handleEnterMovieTitle = (movieTitle) =>{
    setEnteredMovieTitle(movieTitle);
  };

  const handleEnterActorName = (actorName) =>{
    setEnteredActorName(actorName);
  };

  const handleEnterDirectorName = (directorName) =>{
    setEnteredDirectorName(directorName);
  };



const handleSearch = async (data) => {
  console.log('enter try block for handle')
  console.log(data)
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
      setSearchResults(result);
    } catch (err) {
      console.error(err);
    }
  };





  //code for sumbit button along with tests
  const handleSearchButtonClick = () =>{
    
    //commented out
    if (enteredMovieTitle === '' && enteredActorName === '' && enteredDirectorName === ''){
    setSearchError(true)
    }
    else{
      setSearchError(false)
    }

    if(enteredMovieTitle || enteredActorName || enteredDirectorName){
        completedSearch !== [] && setCompletedSearch([enteredMovieTitle, enteredActorName, enteredDirectorName])
      const storedSearch = {"movieTitle": enteredMovieTitle, "actorName": enteredActorName, "directorName": enteredDirectorName};
      handleSearch({...storedSearch});
      //reset all fields after click
      setEnteredMovieTitle('');
      setEnteredActorName('');
      setEnteredDirectorName('');
      setSearchValue(true);
    }
  };




  return (
    <Grid
    container
    spacing={0}
    direction="column"
    justify="flex-start"
    alignItems="flex-start"
    >
    
    <Grid item xs={12}>
      <Typography variant="h3">Search for Movies!</Typography>
    </Grid>
    <Grid item xs={12}>
      <MovieTitle enteredMovieTitle = {enteredMovieTitle} handleEnterMovieTitle={handleEnterMovieTitle} errorCheck = {searchError}/>
    </Grid>
    <Grid item xs={12}>
      <ActorName enteredActorName = {enteredActorName} handleEnterActorName={handleEnterActorName} errorCheck= {searchError}/>
    </Grid>
    <Grid item xs={12}>
      <DirectorName enteredDirectorName = {enteredDirectorName} handleEnterDirectorName={handleEnterDirectorName} errorCheck= {searchError}/>
    </Grid>
    <Grid item xs={12}>
      <Button variant="contained" onClick = {handleSearchButtonClick} sx={{ marginBottom: '10px' }}>Search</Button>
    </Grid>
    {searchValue &&
    <>
    <Grid>
    <Typography variant="h5" gutterBottom>Search Results:</Typography>
    </Grid >
        {searchResults.map((movie) => (
            <Grid key={movie.title}>
                <Typography variant="h6" gutterBottom>{movie.movie_title}</Typography>
                <Typography variant="body1" gutterBottom>Director: {movie.director_name}</Typography>
                <Typography variant="body2" gutterBottom>Reviews: {movie.all_reviews}</Typography>
                <Typography variant="body2" gutterBottom>Average Review Score: {movie.average_review_score}</Typography>
          </Grid>
        ))}
    </>}
      </Grid>
    
  );
};

export default SearchPage;