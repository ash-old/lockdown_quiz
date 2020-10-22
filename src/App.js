import React from 'react';
import Question from "./components/Question";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
    
        <h2>Lockdown Quiz</h2>
      </div>
      <Question content="What is your favourite food?" />
    </div>
  );
}

export default App;
