import React, { useState } from 'react';
import './App.css';

function App() {
  const [ score, setScore ] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ score }</h1>
        <button onClick={() => setScore(score + 1)}>
          Increase score
        </button>
      </header>
    </div>
  );
}

export default App;
