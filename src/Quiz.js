import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuizQuestion from './QuizQuestion.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position:1
        }
    }
    
    render() {
        
        return (
          <div>
            <QuizQuestion quiz_question={quizData.quiz_questions.find(x=>x.id===this.state.quiz_position)}/>
          </div>
        );
    }
}

Quiz.propTypes = {

};

export default Quiz;