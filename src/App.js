import React from 'react';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';
import { Grid } from '@mui/material';
import { Page4 } from './components/Page4';
import { Page5 } from './components/Page5';
import { Page6 } from './components/Page6';
import { Page7 } from './components/Page7';
import { Page8 } from './components/Page8';
import { Page9 } from './components/Page9';
import { Page10 } from './components/Page10';
import "./App.css"

function App() {
  return (
    <Grid
    container
    spacing={2}
    sx={{ padding: "8px 80px 0px 80px", position: "relative" }}
  >
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <Page8/>
      <Page9/>
      <Page10/>
    </Grid>
  );
}

export default App;
