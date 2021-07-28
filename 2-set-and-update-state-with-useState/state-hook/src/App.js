import React, { useState } from 'react';
import './App.css';

function App() {
  const [ score, setScore ] = useState(0);
  const [ message, setMessage ] = useState('Welcome!');

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message }</h1>
        <h1>{ score }</h1>
        <button onClick={() => setScore(prevScore => prevScore + 1)}>
        {/*<button onClick={() => setScore(score + 1)}>*/}
          Increase score
        </button>
       {/* <button onClick={() => setScore(score - 1)}>*/}
        <button onClick={() => setScore(prevScore => prevScore - 1)}>
          Decrease score
        </button>

        <textarea placeholder="update message..." onChange={(e) => setMessage(e.target.value)}>
        </textarea>
      </header>
    </div>
  );
}

export default App;
