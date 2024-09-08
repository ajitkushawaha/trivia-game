import { render, screen, fireEvent } from '@testing-library/react';
import QuestionCard from '../components/QuestionCard';

// Mock functions
const mockOnAnswerSelect = jest.fn();
const mockOnSubmit = jest.fn();

test('renders question and answers correctly', () => {
  render(
    <QuestionCard
      question="What is the capital of France?"
      answers={['Paris', 'London', 'Rome']}
      userAnswer={undefined}
      correctAnswer="Paris"
      questionsLenght={1}
      onAnswerSelect={mockOnAnswerSelect}
      onSubmit={mockOnSubmit}
    />
  );

  // Check if the question is displayed
  expect(screen.getByText(/What is the capital of France\?/i)).toBeInTheDocument();

  // Check if answer options are displayed
  expect(screen.getByLabelText(/Paris/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/London/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Rome/i)).toBeInTheDocument();
});

test('displays correct styling for user answers', () => {
  render(
    <QuestionCard
      question="What is the capital of France?"
      answers={['Paris', 'London', 'Rome']}
      userAnswer="London"
      correctAnswer="Paris"
      questionsLenght={1}
      onAnswerSelect={mockOnAnswerSelect}
      onSubmit={mockOnSubmit}
    />
  );

  // Check if the correct answer and selected answer have correct styles
  expect(screen.getByLabelText(/Paris/i).nextElementSibling).toHaveClass('correct');
  expect(screen.getByLabelText(/London/i).nextElementSibling).toHaveClass('incorrect');
});

test('shows feedback message after selecting an answer', () => {
  render(
    <QuestionCard
      question="What is the capital of France?"
      answers={['Paris', 'London', 'Rome']}
      userAnswer="London"
      correctAnswer="Paris"
      questionsLenght={1}
      onAnswerSelect={mockOnAnswerSelect}
      onSubmit={mockOnSubmit}
    />
  );

  // Check feedback message
  expect(screen.getByText(/Wrong! The correct answer is: Paris/i)).toBeInTheDocument();
});

test('calls onSubmit function when Next Question button is clicked', () => {
  render(
    <QuestionCard
      question="What is the capital of France?"
      answers={['Paris', 'London', 'Rome']}
      userAnswer="Paris"
      correctAnswer="Paris"
      questionsLenght={1}
      onAnswerSelect={mockOnAnswerSelect}
      onSubmit={mockOnSubmit}
    />
  );

  // Click Next Question button
  const nextQuestionButton = screen.getByText(/Next Question/i);
  fireEvent.click(nextQuestionButton);

  // Check if onSubmit function is called
  expect(mockOnSubmit).toHaveBeenCalledTimes(1);
});
