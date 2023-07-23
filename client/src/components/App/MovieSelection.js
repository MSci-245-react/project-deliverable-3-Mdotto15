import * as React from 'react';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MovieSelection = ({movies, selectedMovie, handleSelectMovie, errorCheck}) => {

  
  //states declarations
  //constants and functions declarations
  const handleChangeMovie= (movie, movieID) =>{
    handleSelectMovie(movie, movieID);
  };
  return (
    <>
    
    {/* JSX block */}
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>Select a Movie:</Typography>
    <FormControl sx={{ minWidth: 120 }} >
      <InputLabel>Movies</InputLabel>
      <Select label="Select Movie" sx={{ marginBottom: '10px' }} value = {selectedMovie} >
      {movies?.movies.map((movie) => (
          <MenuItem key={movie.id} value={movie.name} onClick={() => handleChangeMovie(movie.name, movie.id)}>
            {movie.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    {errorCheck && <Typography style = {{color: "red"}} sx={{ marginBottom: '5px' }}>Select your movie</Typography>}

    </>
  );
}

export default MovieSelection;