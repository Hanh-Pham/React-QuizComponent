import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }
    handleResetClick() {
      this.setState({quiz_position:1})
  }
  showNextQuestion() {
    let newPosition = this.state.quiz_position + 1;
    this.setState({ quiz_position: newPosition });
  }
  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    return (
      <div>
        {isQuizEnd ? (
                <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        ) : (
          <QuizQuestion
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
            quiz_question={quizData.quiz_questions.find(
              x => x.id === this.state.quiz_position
            )}
          />
        )}
      </div>
    );
  }
}

Quiz.propTypes = {

};

export default Quiz;