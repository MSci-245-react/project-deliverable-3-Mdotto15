import React from 'react';
import Review from '../App/Review';
import Typography from "@mui/material/Typography";
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';
const Search = () => {
const navigate = useNavigate();
return (
<>
<div>
<AppBar position="static">
<Container maxWidth="xl">
<Toolbar disableGutters>
<SearchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 40 }} />

<Typography variant="h4" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Search Page
</Typography>


<Link
color="inherit"
style={{ cursor: "pointer" }}
onClick={() => navigate('/')}
>
<Typography variant="h5" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Landing
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
Search Page Under Construction...
</Typography>
</div>
</>
)
}
export default Search;
