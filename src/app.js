import React, { useState } from "react";
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


/* TODO

  X <App /> does a check on the request data from the form and 
    X updates the request variable in state with the 
      X url, 
      X method, and 
      X potentially the body

  X <App /> has an effect hook 
    X that’s looking for changes to the request variable in state, and in response, 
      X runs the API request with the new request options from state
  
  X <App /> updates state with the results of the API Request
*/


const App = () =>
{
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
    setData({ data });
    setRequestParams({ requestParams, ...requestParams })
  };

  return (
    <div id="app">
      <Header />
      <div>Request Method: { requestParams.method }</div>
      <div>URL: { requestParams.url }</div>
      <Form handleApiCall={ callApi } />
      <Results
        data={ data }
        displayValue={ "Loading..." }
      />

      <Footer />
    </div>
  );
};

export default App;
