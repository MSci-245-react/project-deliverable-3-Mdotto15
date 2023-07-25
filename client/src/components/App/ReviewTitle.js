import * as React from 'react';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const ReviewTitle = ({enteredTitle, handleEnterTitle, errorCheck}) => {

  //states declarations
  //constants and functions declarations
  const handleChangeTitle= (event) =>{
    handleEnterTitle(event.target.value);
  };

  return (
    <>
    
    {/* JSX block */}
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>Enter Review Title:</Typography>
    <FormControl sx={{ minWidth: 500 }} >
      <TextField label="Review Title" variant="outlined" sx={{ marginBottom: '10px' }} onChange = {handleChangeTitle} value = {enteredTitle}/>
    </FormControl>
    {errorCheck && <Typography style = {{color: "red"}} sx={{ marginBottom: '5px' }}>Enter your review title</Typography>}

    </>
  );
}

export default ReviewTitle;