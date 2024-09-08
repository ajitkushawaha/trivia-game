import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button'; 
describe('Button component', () => {
  
  test('renders with children text', () => {
    render(<Button>Click Me</Button>);
    
    // Check if the button is rendered with the correct text
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn(); // Mock function for click event
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    const buttonElement = screen.getByText('Click Me');
    
    // Simulate button click
    fireEvent.click(buttonElement);
    
    // Check if the onClick function is called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies the correct variant class', () => {
    render(<Button variant="primary">Click Me</Button>);
    
    const buttonElement = screen.getByText('Click Me');
    
    // Check if the button has the 'primary' class
    expect(buttonElement).toHaveClass('primary');
  });

  test('renders without onClick handler without errors', () => {
    render(<Button>Click Me</Button>);
    
    const buttonElement = screen.getByText('Click Me');
    
    // Simulate button click, should not throw error even without onClick
    fireEvent.click(buttonElement);
    
    // Ensure the button still exists in the document
    expect(buttonElement).toBeInTheDocument();
  });
});
