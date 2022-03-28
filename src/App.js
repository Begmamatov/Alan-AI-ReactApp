import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';
import NewsCards from './components/NewsCard/NewsCards';

const alanKey = 'c5eb10c6419dea3f270efad1e1809d972e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const [newArticles, setNewArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewArticles(articles);
        }
      }
    })
  }, [])

  return (
    <div className="App">
      <h1>
        Hello
      </h1>

      <NewsCards articles={newArticles} />
    </div>
  );
}

export default App;
