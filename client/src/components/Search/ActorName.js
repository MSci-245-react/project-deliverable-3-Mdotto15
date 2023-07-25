import * as React from 'react';
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const ActorName = ({enteredActorName, handleEnterActorName, errorCheck}) => {

  //states declarations
  //constants and functions declarations
  const handleChangeActorName= (event) =>{
    handleEnterActorName(event.target.value);
  };


  return (
    <>
    
    {/* JSX block */}
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>Search By Actor :</Typography>
    <FormControl sx={{ minWidth: 500 }} >
      <TextField label="Actor Name" variant="outlined" sx={{ marginBottom: '10px' }} value = {enteredActorName} onChange={handleChangeActorName} />
    </FormControl>
    {errorCheck && <Typography style = {{color: "red"}} sx={{ marginBottom: '5px' }}>Enter Actor First/Last Name</Typography>}


    </>
  );
}

export default ActorName;