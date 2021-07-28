import React, { useState } from 'react';
import './App.css';

function App({initialCount= 0}) {
  const [ score, setScore ] = useState(0);
  const [ message, setMessage ] = useState('Welcome!');
  const [ count, setCount ] = useState(initialCount);
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

        <h2> Something Else Here</h2>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </header>

    </div>
  );
}

export default App;
