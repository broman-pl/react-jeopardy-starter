import React, { Component } from 'react';
import { JeopardyService } from "./services/JeopardyService";
import './App.css';

import Score from './Score';
import Question from './Question';

class App extends Component {

  client;

  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      question: {},
      score: 0
    }
  }

  getNewQuestion = () => {
    return this.client.getQuestion().then(result => {
      console.log("question: " + result.data[0].question)
      console.log("category: " + result.data[0].category.title)
      console.log("anwer: " + result.data[0].answer)

      this.setState({
        question: result.data[0]
      })
    })
  }

  componentDidMount = () => {
    this.getNewQuestion();
  }

  submitAnswer = () => {
    console.log("answer was send");
    var score = 0;
    this.answer = document.getElementById("answer").value
    if (this.answer === this.state.question.answer) {
      console.log("correct")
      score = this.state.score + this.state.question.value;
    } else {
      console.log("incorrect (" + this.answer + ", " + this.state.question.answer + ")" )
      score = this.state.score - this.state.question.value;
    }
    console.log("score: " + score)
    this.setState({score: score})
    this.getNewQuestion();
    document.getElementById("answer").value = "";
  }

  render() {
    if (this.state.question.category && this.state.question.category.title) {
      this.category = this.state.question.category.title
    }
    return (
      <div>
        <Question category={this.category} question={this.state.question.question} value={this.state.question.value} answerHandler={this.submitAnswer} />
        <Score score={this.state.score} />
      </div>
    );
  }
}

export default App;
