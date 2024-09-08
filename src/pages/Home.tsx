import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Trivia Game!</h1>
      <p>Test your knowledge with 10 random trivia questions. Good luck!</p>
      <Button onClick={startQuiz} variant='primary'>Start Quiz &#8594;</Button>
    </div>
  );
};

export default Home;
