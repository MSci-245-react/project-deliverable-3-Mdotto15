import * as React from 'react';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const ReviewBody = ({enteredReview, handleEnterReview, errorCheck}) => {

  //states declarations
  //constants and functions declarations
  const handleChangeBody= (event) =>{
    handleEnterReview(event.target.value);
  };


  return (
    <>
    
    {/* JSX block */}
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>Enter Review Body:</Typography>
    <FormControl sx={{ minWidth: 500 }} >
      <TextField label="Review Body" variant="outlined" sx={{ marginBottom: '10px' }} multiline rows={4} inputProps={{ maxLength: 200 }} value = {enteredReview} onChange={handleChangeBody} />
    </FormControl>
    {errorCheck && <Typography style = {{color: "red"}} sx={{ marginBottom: '5px' }}>Enter your review</Typography>}


    </>
  );
}

export default ReviewBody;