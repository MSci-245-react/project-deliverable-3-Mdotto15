import * as React from 'react';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const DirectorName = ({enteredDirectorName, handleEnterDirectorName, errorCheck}) => {

  //states declarations
  //constants and functions declarations
  const handleChangeDirectorName= (event) =>{
    handleEnterDirectorName(event.target.value);
  };


  return (
    <>
    
    {/* JSX block */}
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>Search By Director:</Typography>
    <FormControl sx={{ minWidth: 500 }} >
      <TextField label="Director Name" variant="outlined" sx={{ marginBottom: '10px' }}  value = {enteredDirectorName} onChange={handleChangeDirectorName} />
    </FormControl>
    {errorCheck && <Typography style = {{color: "red"}} sx={{ marginBottom: '5px' }}>Enter Director First/Last Name</Typography>}


    </>
  );
}

export default DirectorName;