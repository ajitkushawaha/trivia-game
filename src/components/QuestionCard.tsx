import React from "react";
import Button from "./Button";

type QuestionCardProps = {
  question: string;
  answers: string[];
  userAnswer: string | undefined;
  correctAnswer: string;
  questionsLenght:number;
  onAnswerSelect: (answer: string) => void;
  onSubmit: () => void;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  userAnswer,
  questionsLenght,
  correctAnswer,
  onAnswerSelect,
  onSubmit,
}) => {
  

  type Command = () => string;
  
  const getCheckboxStyle = (answer: string): string => {
    const commandMap: { [key: string]: Command } = {
      noAnswerSelected: () => "secondary",
      correctAnswer: () => "correct",
      incorrectAnswer: () => "incorrect",
    };

    if (!userAnswer) return commandMap["noAnswerSelected"]();
    if (answer === correctAnswer) return commandMap["correctAnswer"]();
    if (answer === userAnswer && answer !== correctAnswer) return commandMap["incorrectAnswer"]();
    
    return commandMap["noAnswerSelected"]();
  };

  return (
    <div className="question-card">
      <h2>{questionsLenght+1}. {question}</h2>
      <form className="answers">
        <ol>
          {answers.map((answer, index) => (
            <li className="question__list" key={index}>
              <label>
                <input
                  type="checkbox"
                  name="answer"
                  value={answer}
                  checked={userAnswer === answer}
                  onChange={() => !userAnswer && onAnswerSelect(answer)}
                />
                <span className={getCheckboxStyle(answer)}>{answer}</span>
              </label>
            </li>
          ))}
        </ol>
      </form>
      {userAnswer && (
        <div className="feedback">
          {userAnswer === correctAnswer ? (
            <p style={{ color: "green" }}>Correct!</p>
          ) : (
            <p style={{ color: "red" }}>
              Wrong! The correct answer is: {correctAnswer}
            </p>
          )}
        </div>
      )}
      <Button variant="primary" onClick={onSubmit}>
        Next Question &#8594;
      </Button>
    </div>
  );
};

export default QuestionCard;
