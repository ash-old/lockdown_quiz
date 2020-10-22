import React from 'react';
import Question from "./components/Question";
import './App.css';
import PropType from 'prop-types';

constructor(props) {
  super(props);

  this.state = {
    counter: 0,
    questionId: 1,
    question: "",
    answerOptions: [],
    answer: "",
    answersCount: {},
    result: ""
  };
}

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
