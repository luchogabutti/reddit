import './App.css';
import React from 'react';
import '@fontsource/roboto/300.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './screens/home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3d5af1',
    },
    secondary: {
      main:'#f1d33d', 
    },
    background: {
      main: '#fff'
    }
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Home/>
    </div>
    </ThemeProvider>
  );
}

export default App;
