import { Grid } from '@mui/material'
import Home from './components/Home/Home'
import NavMenu from './components/NavMenu/NavMenu'
import styled from 'styled-components';
import backgroundImage from './images/tyler-lastovich-1755wsQzce8-unsplash.jpg';

const StyledGrid = styled(Grid)`
background: 
linear-gradient(
  rgba(0, 0, 0, 0.5), 
  rgba(0, 0, 0, 0.5)
),
url(${backgroundImage});
  background-size: cover;  // Cover the entire Grid
  background-position: center;  // Center the background
`;

function App() {
  return (
    <StyledGrid container spacing={2}>
      <Grid item xs={1}>
          <NavMenu />
      </Grid>
      <Grid item xs={11}>
          <Home />
      </Grid>
    </StyledGrid>
  )
}

export default App
