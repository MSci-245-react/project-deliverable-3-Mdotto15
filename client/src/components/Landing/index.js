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
MyPage
</Typography>
</Link>
</Toolbar>
</Container>
</AppBar>
</div>
<div>
{/*add Search elements below */}
<Typography variant="h5" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Landing Page Under Construction...
</Typography>
</div>
</>
)
}
export default Landing;










