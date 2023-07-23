import * as React from 'react';
import { useEffect } from 'react';
import ReviewTitle from './ReviewTitle';
import ReviewBody from './ReviewBody';
import ReviewRating from './ReviewRating';
import MovieSelection from './MovieSelection';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';




const Review = () => {

  //states declarations
  //Setting original state of movies and movie id
const [movies, setMovies] = React.useState();
const [movieID, setMovieID] = React.useState('');
const [selectedMovie, setSelectedMovie] = React.useState('');
const [enteredTitle, setEnteredTitle] = React.useState('');
const [enteredReview, setEnteredReview] = React.useState('');
const [selectedRating, setSelectedRating] = React.useState('');

  //error states
const [movieSelectionError, setMovieSelectionError] = React.useState(false);
const [enteredTitleError, setEnteredTitleError] = React.useState(false);
const [enteredReviewError, setEnteredReviewError] = React.useState(false);
const [ratingSelectionError, setRatingSelectionError] = React.useState(false);
//submit button clicked state
const [submitValue, setSubmitValue] = React.useState(false);
//display review state to check if it should be reset or not
const [completedReview, setCompletedReview] = React.useState([]);
//state for current user id, starts at 0
const [userID, setUserID] = React.useState(1);



  //constants and functions declarations

  //Selection/Input Handlers
  const handleSelectMovie = (movie, movieID) =>{
    setSelectedMovie(movie);
    setMovieID(movieID)
    console.log(movieID)
  };

  const handleEnterTitle = (reviewTitle) =>{
    setEnteredTitle(reviewTitle);
  };

  const handleEnterReview = (reviewBody) =>{
    setEnteredReview(reviewBody);
  };

  const handleSelectRating = (rating) =>{
    setSelectedRating(rating);
  };

//state updating side effect
//use effect to get movies from sql query
React.useEffect(() => {
  fetchMovies();
}, []);

// fetch movies code
const fetchMovies = async () => {
  try {
  const response = await fetch('/api/getMovies', {
    method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
      const data = await response.json();
      setMovies(data);
  }catch (err){
      console.log(err);
  }
};

const sendReview = async (data) => {
  console.log("send review called")
  try {
    const response = await fetch('/api/addReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log("there was an error");
    console.log(err);
  }
};
  





  //code for sumbit button along with tests
  const handleSubmitButtonClick = () =>{
    
    selectedMovie === '' ? setMovieSelectionError(true) : setMovieSelectionError(false)
    enteredTitle === '' ? setEnteredTitleError(true) : setEnteredTitleError(false)
    enteredReview === '' ? setEnteredReviewError(true) : setEnteredReviewError(false)
    selectedRating === '' ? setRatingSelectionError(true) : setRatingSelectionError(false)
    if(selectedMovie && enteredTitle && enteredReview && selectedRating){
      completedReview !== [] && setCompletedReview([selectedMovie, enteredTitle, enteredReview, selectedRating])
      const storedReview = {"Movie": selectedMovie, "Title": enteredTitle, "Body": enteredReview, "Rating": selectedRating};
      sendReview({...storedReview, userID, movieID});
      //reset all fields after click
      setSelectedMovie('');
      setEnteredReview('');
      setEnteredTitle('');
      setSelectedRating('');
      setSubmitValue(true);
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
      <Typography variant="h3">Review a Movie!</Typography>
    </Grid>
    <Grid item xs={12}>
      <MovieSelection movies = {movies} movieID = {movieID} selectedMovie = {selectedMovie} handleSelectMovie={handleSelectMovie} errorCheck = {movieSelectionError}/>
    </Grid>
    <Grid item xs={12}>
      <ReviewTitle enteredTitle = {enteredTitle} handleEnterTitle={handleEnterTitle} errorCheck= {enteredTitleError}/>
    </Grid>
    <Grid item xs={12}>
      <ReviewBody enteredReview = {enteredReview} handleEnterReview={handleEnterReview} errorCheck= {enteredReviewError}/>
    </Grid>
    <Grid item xs={12}>
      <ReviewRating selectedRating = {selectedRating} handleSelectRating={handleSelectRating} errorCheck= {ratingSelectionError}/>
    </Grid>
    <Grid item xs={12}>
      <Button variant="contained" onClick = {handleSubmitButtonClick} sx={{ marginBottom: '10px' }}>Submit</Button>
    </Grid>
    <Grid item xs={12} container
    direction="column"
    sx={{ justifyContent: 'center' }}
    justify="center">
      
      {/*//Conditional Render based on all values being filled in */}
      {submitValue &&
      <>
      <Typography sx={{ marginBottom: '10px' }} align="center">Your review has been received!</Typography>
      <Typography sx={{ marginBottom: '10px' }} align="center">{completedReview[0]}</Typography>
      <Typography sx={{ marginBottom: '10px' }} align="center">{completedReview[1]}</Typography>
      <Typography sx={{ marginBottom: '10px' }} align="center">{completedReview[2]}</Typography>
      <Typography sx={{ marginBottom: '10px' }} align="center">{completedReview[3]}</Typography>
      </>}
      
    </Grid>
    </Grid>
  );
}

export default Review;