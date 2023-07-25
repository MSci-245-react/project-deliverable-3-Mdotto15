import React from 'react';
import Typography from "@mui/material/Typography";
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import FlightLandIcon from '@mui/icons-material/FlightLand';

import { useNavigate } from 'react-router-dom';
const Landing = () => {
const navigate = useNavigate();
return (
<>
<div>
<AppBar position="static">
<Container maxWidth="xl">
<Toolbar disableGutters>
<FlightLandIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 40 }} />

<Typography variant="h4" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Landing Page
</Typography>


<Link
color="inherit"
style={{ cursor: "pointer" }}
onClick={() => navigate('/Search')}
>
<Typography variant="h5" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Search
</Typography>


</Link>
<Link
color="inherit"
style={{ cursor: "pointer" }}
onClick={() => navigate('/Review')}
>
<Typography variant="h5" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Review
</Typography>
</Link>
<Link
color="inherit"
style={{ cursor: "pointer" }}
onClick={() => navigate('/MyPage')}
>
<Typography variant="h5" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Trailers
</Typography>
</Link>
</Toolbar>
</Container>
</AppBar>
</div>
<div>
<Typography variant="h3" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Welcome To Marc's Movie Review Site!
</Typography>
</div>
<div ><iframe src="https://gifer.com/embed/8CPR" width = "30%"  ></iframe></div>
<div>
<Typography variant="h5" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Navigate through various pages in the app bar to:
</Typography>
<Typography variant="body1" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
     -Write a review
</Typography>
<Typography variant="body1" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
     -Search for movies
</Typography>
<Typography variant="body1" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
     -Visit my custom page!
</Typography>
</div>
<div><iframe src="https://gifer.com/embed/8V9H" ></iframe></div>
</>
)
}
export default Landing;










