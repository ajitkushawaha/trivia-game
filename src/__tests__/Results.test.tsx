import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import Results from '../pages/Results';
import { QuizContext } from '../context/QuizContext';
import { createMemoryHistory } from 'history';

const mockSetCurrentQuestionIndex = jest.fn();
const mockSetScore = jest.fn();

const MockQuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QuizContext.Provider
    value={{
      currentQuestionIndex: 0,  // Add this line to include the required property
      setCurrentQuestionIndex: mockSetCurrentQuestionIndex,
      score: 7,
      setScore: mockSetScore,
    }}
  >
    {children}
  </QuizContext.Provider>
);

test('renders results and displays correct information', () => {
  render(
    <MemoryRouter initialEntries={['/results']}>
      <MockQuizProvider>
        <Results />
      </MockQuizProvider>
    </MemoryRouter>
  );

  // Check if the results text is displayed
  expect(screen.getByText(/Quiz Completed!/i)).toBeInTheDocument();
  expect(screen.getByText(/Total Questions: 10/i)).toBeInTheDocument();
  expect(screen.getByText(/Correct Answers: 7/i)).toBeInTheDocument();
  expect(screen.getByText(/Incorrect Answers: 3/i)).toBeInTheDocument();
});

test('clicking restart quiz button navigates to home page and resets state', () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <MockQuizProvider>
        <Results />
      </MockQuizProvider>
    </Router>
  );

  // Click the restart quiz button
  fireEvent.click(screen.getByText(/Restart Quiz/i));

  // Check if the navigation happened
  expect(history.location.pathname).toBe('/');

  // Check if the state reset function was called
  expect(mockSetCurrentQuestionIndex).toHaveBeenCalledWith(0);
});
