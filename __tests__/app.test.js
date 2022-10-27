import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/app';

describe('testing the app component', () =>
{
  test('upon submitting the form, result in data being rendered in the output area', () =>
  {
    render(<App />);

    // scrape test page for GO! button
    let goButton = screen.getByText('GO!');
    // click the button
    fireEvent.click(goButton);

    // get the value of the thing with the 'clickDisplay' class
    let testResults = screen.getByTestId('test-results');

    expect(testResults).toHaveTextContent('results:');
  });
})
