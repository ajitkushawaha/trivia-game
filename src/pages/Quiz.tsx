// src/pages/Quiz.tsx
import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import useFetchTrivia from '../hooks/useFetchTrivia';
import QuestionCard from '../components/QuestionCard';
import { useNavigate } from 'react-router-dom';
import QuestionCardSkeleton from '../components/QuestionCardSkeleton';

const Quiz: React.FC = () => {
  const { questions, loading, error } = useFetchTrivia(20);
  const context = useContext(QuizContext); // Get the context

  if (!context) {
    throw new Error('QuizContext must be used within a QuizProvider');
  }

  const { currentQuestionIndex, setCurrentQuestionIndex, score, setScore } = context;
  const navigate = useNavigate();

  const [userAnswer, setUserAnswer] = useState<string | undefined>(undefined);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex >= questions.length) {
      navigate('/results');
    }
  }, [currentQuestionIndex, questions.length, navigate]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const shuffled = shuffleArray([...currentQuestion.incorrect_answers, currentQuestion.correct_answer]);
      setShuffledAnswers(shuffled);
    }
  }, [currentQuestionIndex, questions]);

  const handleAnswerSelect = (answer: string) => {
    setUserAnswer(answer);
  };

  const handleAnswerSubmit = () => {
    if (userAnswer) {
      if (userAnswer === questions[currentQuestionIndex].correct_answer) {
        setScore(score + 1);
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer(undefined);
    }
  };

  const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

  if (loading) {
    return <QuestionCardSkeleton />;
  }
  if (error) return <p>Error loading questions.</p>;

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="quiz-page">
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion.question}
          answers={shuffledAnswers}
          userAnswer={userAnswer}
          correctAnswer={currentQuestion.correct_answer}
          onAnswerSelect={handleAnswerSelect}
          onSubmit={handleAnswerSubmit}
          questionsLenght={currentQuestionIndex}
        />
      )}
    </div>
  );
};

export default Quiz;
