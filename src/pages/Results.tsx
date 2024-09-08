import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';

const Results: React.FC = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('QuizContext must be used within a QuizProvider');
  }

  const { setCurrentQuestionIndex, score, setScore } = context;

  const navigate = useNavigate();

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    navigate('/');
  };

  return (
    <div className="results-page"> 
      <h1>Quiz Completed!</h1>
      <p>Total Questions: 10</p>
      <p>Correct Answers: {score}</p>
      <p>Incorrect Answers: {10 - score}</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Results;
