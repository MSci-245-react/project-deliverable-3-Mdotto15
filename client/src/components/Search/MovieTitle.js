import * as React from 'react';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const MovieTitle = ({enteredMovieTitle, handleEnterMovieTitle, errorCheck}) => {

  //states declarations
  //constants and functions declarations
  const handleChangeMovieTitle= (event) =>{
    handleEnterMovieTitle(event.target.value);
  };


  return (
    <>
    
    {/* JSX block */}
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>Search By Movie Title:</Typography>
    <FormControl sx={{ minWidth: 500 }} >
      <TextField label="Movie Title" variant="outlined" sx={{ marginBottom: '10px' }} value = {enteredMovieTitle} onChange={handleChangeMovieTitle} />
    </FormControl>
    {errorCheck && <Typography style = {{color: "red"}} sx={{ marginBottom: '5px' }}>Enter Movie Title</Typography>}


    </>
  );
}

export default MovieTitle;