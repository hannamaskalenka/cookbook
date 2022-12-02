import { fireEvent, render, screen } from '@testing-library/react';
import Test from './Test';

describe('Testing the Test component', () => {
  test('renders Hello React as a text', () => {
    render(<Test />);

    const testElement = screen.getByText('Hello React');
    expect(testElement).toBeInTheDocument();
  });

  test('contains a button', () => {
    render(<Test />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders I am not changed as a default text', () => {
    render(<Test />);
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('I am not changed')).toBeInTheDocument();
    expect(screen.queryByText('I got changed!')).toBe(null);
  });

  test('renders I got changed! as a changed text on toggle', () => {
    render(<Test />);

    expect(screen.getByText('I got changed!')).toBeInTheDocument();
    expect(screen.queryByText('I am not changed!')).toBe(null);
  });
});
