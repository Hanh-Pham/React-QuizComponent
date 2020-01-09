import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  constructor(props) {
      super(props);
      console.log(props)
  }

    render() {
               const items = [];

               for (const [
                 index,
                 value
               ] of this.props.quiz_question.answer_options.entries()) {
                 items.push(<li key={index}>{value}</li>);
               }
               return (
                 <main>
                   <section>
                     <p>{this.props.quiz_question.instruction_text}</p>
                   </section>
                   <section className="buttons">
                     <ul>
                       <QuizQuestionButton
                         button_text={
                           this.props.quiz_question.answer_options[0]
                         }
                       />
                     </ul>
                   </section>
                 </main>
               );
             }
}

QuizQuestion.propTypes = {

};

export default QuizQuestion;