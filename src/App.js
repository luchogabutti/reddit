import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '@fontsource/roboto/300.css';
import Header from './components/Header';
import Article from './components/Article';
import { ThemeProvider, createTheme } from '@mui/material/styles';


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

function App() {

  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('');

  useEffect(()=> {
    fetch('https://www.reddit.com/'+subreddit+'.json').then(res=>{
      if (res.status !=200) {
        console.log('Error');
        return;
      }

      res.json().then(data => {
        if (data != null) {
          setArticles(data.data.children);
        }
      })

    });

  }, [subreddit]);


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <div className='articles'>
        {
          (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data}/>) : ''
        }
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
