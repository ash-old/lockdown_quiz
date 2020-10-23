import React, { Component } from 'react';
import Question from "./components/Question";
import './App.css';
import PropType, { array } from 'prop-types';
import quizQuestions from './api/quizQuestions';
import { render } from '@testing-library/react';
// import logo from '../public/logo';

class App extends Component{
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

componentDidMount() {
  const shuffledAnswerOptions = quizQuestions.map((question) =>
  this.shuffleArray(question.answers));

  this.setState({
    question: quizQuestions[0].question,
    answerOptions: shuffledAnswerOptions[0]
  });
}

shuffleArray(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while(0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

render() {
  return (
    <div className="App">
      <div className="App-header">
      {/* <img src={logo} className="App-logo" alt=logo /> */}
        <h2>Lockdown Quiz</h2>
      </div>
      <Question content="What is your favourite food?" />
    </div>
  );
}
}


export default App;
