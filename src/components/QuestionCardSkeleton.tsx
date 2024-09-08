import React from 'react';

const QuizSkeleton: React.FC = () => {

  return (
    <div className="quiz-page">
      <h2 className="skeleton-title"></h2>
      <div className="skeleton-form">
        <ol className="skeleton-list">
          {[...Array(5)].map(() => (
            <li key={Math.random()} className="skeleton-item">
              <div className="skeleton-checkbox"></div>
              <div className="skeleton-answer"></div>
            </li>
          ))}
        </ol>
      </div>
      <div className="skeleton-feedback"></div>
      <div className="skeleton-button">
        <button className="skeleton-button-inner"></button>
      </div>
    </div>
  );
};

export default QuizSkeleton;
