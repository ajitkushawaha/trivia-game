import React, { createContext, useState, ReactNode, useContext } from 'react';

interface QuizContextType {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  score: number;
  setScore: (score: number) => void;
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  return (
    <QuizContext.Provider value={{ currentQuestionIndex, setCurrentQuestionIndex, score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};
