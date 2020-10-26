import React, { Component } from 'react';
import Question from "./components/Question";
import './App.css';
import PropType, { array } from 'prop-types';
import quizQuestions from './api/quizQuestions';
import { render } from '@testing-library/react';
import Quiz from './components/Quiz';
import logo from './art/logo.svg';

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
  this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
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

setUserAnswer(answer) {
  this.setState((state, props) => ({
    answersCount: {
      ...state.answersCount,
      [answer]: (state.answerCount[answer] || 0) + 1
    },
    answer: answer
  }));
}

setNextQuestion() {
  const counter = this.state.counter + 1;
  const questionId = this.state.questionId + 1;
  this.setState({
    counter: counter,
    questionId: questionId,
    question: quizQuestions[counter].question,
    answerOptions: quizQuestions[counter].answers,
    answer: ''
  });
}

handleAnswerSelected(event) {
  this.setUserAnswer(event.currentTarget.value);
  if(this.state.questionId < quizQuestions.length) {
    setTimeout(() => this.setNextQuestion(), 300);
  } else {
    setTimeout(() => this.setResults(this.getResults()), 300);
  }
}

getResults() {
  const answersCount = this.state.answersCount;
  const answersCountKeys = Object.keys(answersCount);
  const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
  const maxAnswerCount = Math.max.apply(null, answersCountValues);

  return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
}

setResults(result) {
  if(result.length === 1) {
    this.setState({result: result[0]});
  } else {
    this.setState({result: 'Undetermined'});
  }
}

render() {
  return (
    <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h2>Lockdown Quiz</h2>
      </div>
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.handleAnswerSelected}
        onAnswerSelected={this.handleAnswerSelected}
      />
    </div>
  );
}
}


export default App;
