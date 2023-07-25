import React from 'react';
import Review from '../App/Review';
import Typography from "@mui/material/Typography";
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';

import { useNavigate } from 'react-router-dom';
const ReviewPage = () => {
const navigate = useNavigate();
return (
<>
<div>
<AppBar position="static">
<Container maxWidth="xl">
<Toolbar disableGutters>
<ThumbsUpDownIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 40 }} />

<Typography variant="h4" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Review Page
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
onClick={() => navigate('/Search')}
>
<Typography variant="h5" color="inherit" noWrap sx={{ marginRight: '1rem' }}>
Search
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
<Review/>
</div>
</>
)
}
export default ReviewPage;










