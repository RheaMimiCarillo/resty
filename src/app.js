import React, { useState } from "react";

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
/* TODO: convert App to functional component
  1. import usestate
  2. make states for each thing that needs it
  3. make handlers to catch input/change
  4. make handlers to handle submit events
  5. style page to look like a reputable search engine
*/

const App = () =>
{
  // state => the current value of our component State
  // setState => function that can update current state to a new state.


  let [ data, setData ] = useState(null);

  let [ requestParams, setRequestParams ] = useState({});

  const callApi = (requestParams) =>
  {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" }
      ]
    };
    // using the spread operator to maintain any previous state values.
    setData({ data, ...data });
    setRequestParams({ requestParams, ...requestParams })
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: { requestParams.method }</div>
      <div>URL: { requestParams.url }</div>
      <Form handleApiCall={ callApi } />
      <Results data={ data } />
      <Footer />
    </React.Fragment>
  );
};


/*
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) =>
  {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    this.setState({
      data,
      requestParams
    });
  }

  render()
  {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: { this.state.requestParams.method }</div>
        <div>URL: { this.state.requestParams.url }</div>
        <Form handleApiCall={ this.callApi } />
        <Results data={ this.state.data } />
        <Footer />
      </React.Fragment>
    );
  }
}
*/

export default App;
