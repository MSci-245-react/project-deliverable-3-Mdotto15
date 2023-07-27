import * as React from 'react';
import { useEffect } from 'react';

import TitleSelection from './TitleSelection';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';




const Trailers = () => {

  //states declarations
  //Setting original state of movies and movie id
const [trailerTitles, setTrailerTitles] = React.useState();
const [movieID, setMovieID] = React.useState('');
const [selectedMovie, setSelectedMovie] = React.useState('');
const [trailerLink, setTrailerLink] = React.useState('');

  //error states
const [movieSelectionError, setMovieSelectionError] = React.useState(false);
//submit button clicked state
const [submitValue, setSubmitValue] = React.useState(false);





  //constants and functions declarations

  //Selection/Input Handlers
  const handleSelectMovie = (movie, movieID) =>{
    setSelectedMovie(movie);
    setMovieID(movieID);
  };


//state updating side effect
//use effect to get movies from sql query
React.useEffect(() => {
  fetchTrailers();
}, []);

// fetch movies code
const fetchTrailers = async () => {
  console.log('fetch trailers called')
  try {
  const response = await fetch('/api/getTrailers', {
    method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
      
      const data = await response.json();
      console.log(data)
      setTrailerTitles(data);
  }catch (err){
      console.log(err);
  }
};

const sendSelection = async (data) => {
  console.log("send review called")
  try {
    const response = await fetch('/api/sendSelection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    setTrailerLink(result);
  } catch (err) {
    console.log("there was an error");
    console.log(err);
  }
};
  





  //code for sumbit button along with tests
  const handleSubmitButtonClick = () =>{
    
    selectedMovie === '' ? setMovieSelectionError(true) : setMovieSelectionError(false)
    if(selectedMovie){
      sendSelection({movieID});
      setSubmitValue(true);
    }
  };

  console.log(movieID);
  console.log(trailerLink[0]);
  let linkObj = trailerLink[0];


  return (
    <Grid
    container
    spacing={0}
    direction="column"
    justify="flex-start"
    alignItems="flex-start"
    >
    
    <Grid item xs={12}>
      <Typography variant="h3">Find Movie Trailer!</Typography>
    </Grid>
    <Grid item xs={12}>
      <TitleSelection trailerTitles = {trailerTitles} movieID = {movieID} selectedMovie = {selectedMovie} handleSelectMovie={handleSelectMovie} errorCheck = {movieSelectionError}/>
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
      <Typography variant = "h5" sx={{ marginBottom: '10px' }} >Trailer for {selectedMovie}:</Typography>
      
      <Grid><iframe width = "500" height = "315" src={trailerLink && trailerLink[0] ? trailerLink[0].trailerLink.replace(/^"(.*)"$/, '$1') : ''} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></Grid>
      
      </>}
      
    </Grid>
    </Grid>
  );
}

export default Trailers;