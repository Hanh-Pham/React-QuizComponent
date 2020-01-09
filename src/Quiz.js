import React, { Component } from 'react';
import PropTypes from 'prop-types';
let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position:1
        }
    }
    
    render() {
        console.log(quizData)
        let question = quizData.quiz_questions.find(x=>x.id===this.state.quiz_position).instruction_text
        return (
            <div>
                <div className='QuizQuestion'>
                    {question}
               </div>
            </div>
        );
    }
}

Quiz.propTypes = {

};

export default Quiz;