import * as React from 'react';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const ReviewRating = ({selectedRating, handleSelectRating, errorCheck}) => {

  //states declarations
  //constants and functions declarations

  const handleChangeRating= (event) =>{
    handleSelectRating(event.target.value);
  };

  return (
    <>
    
    {/* JSX block */}
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>Enter Rating:</Typography>
    <RadioGroup row value = {selectedRating} onChange = {handleChangeRating}>
      <FormControlLabel value="1" control={<Radio />} label="1" sx={{ marginBottom: '10px' }}/>
      <FormControlLabel value="2" control={<Radio />} label="2" sx={{ marginBottom: '10px' }}/>
      <FormControlLabel value="3" control={<Radio />} label="3" sx={{ marginBottom: '10px' }}/>
      <FormControlLabel value="4" control={<Radio />} label="4" sx={{ marginBottom: '10px' }}/>
      <FormControlLabel value="5" control={<Radio />} label="5" sx={{ marginBottom: '10px' }}/>
    </RadioGroup>
    {errorCheck && <Typography style = {{color: "red"}} sx={{ marginBottom: '5px' }}>Select the rating</Typography>}

    </>
  );
}

export default ReviewRating;