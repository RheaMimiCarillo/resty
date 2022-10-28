// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
// https://testing-library.com/docs/react-testing-library/example-intro/
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

import App from '../src/app';

/* TODO

  Assert that upon submitting the form will result in data being rendered in the output area
    O You will need to “mock” the API request with React Testing Library
  
    Note the example here: https://testing-library.com/docs/react-testing-library/example-intro/
      This shows how to use the msw package to setup a fake server that returns fake data in your tests so that you can run tests without having to call an actual API

*/

const server = setupServer(
  rest.get('/test', (req, res, ctx) =>
  {
    return res(ctx.json({ greeting: 'fancy feast' }))
  }),
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

  test('loads and displays greeting', async () =>
  {
    render(<App url="/test"/>)

    let goButton = screen.getByText('GO!');

    let results = await waitFor(() => screen.getByTestId('test-results'));

    expect(testResults).toHaveTextContent('fancy feast');
  })
})
