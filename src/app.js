import React, { useState, useEffect, useReducer } from "react";
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
//import axios from 'axios';


/* TODO
  X Refactor your state management within the App component to use the useReducer hook.

    X Replace any component state managements to use derived state from useReducer with a reducer function and initial state.

    X <App />: Use a reducer to store and manage all application state: loading, results, history
      X Add to history array in state after every api call
        X method, 
        X url, 
        X results (json)

  Stretch Goals:
  - Store the history in local storage as well as in state
  - When the application loads, use an effect to read from local storage and put that history into your state right away
  
  Personal Stretch Goals:
  - implement `optional chaining` in places where a ternary is too verbose
*/


const App = () =>
{
  let [ data, setData ] = useState(null);

  let [ requestParams, setRequestParams ] = useState(null);

  useEffect(() =>
  {
    console.log('requestParams changed: ', requestParams);
    // if requestParams is truthy, callApi with request params
    Boolean(requestParams) && callApi(requestParams.url, requestParams.method, requestParams.body);
  }, [ requestParams ]);

  const handleRequestParams = (formData) =>
  {
    // spread operator to retain previous values
    setRequestParams({ requestParams, ...formData })
  }

  // makes an API call and sets the response to state
  async function callApi(url = '', method = 'GET', body)
  {
    // build request parameters with method 
    let currentParams = {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      // body: goes here if there is a body to put here
    }

    // if the method is POST or PUT append `body` to `currentParams`
    method === 'POST' || method === 'PUT' ? (currentParams.body = JSON.stringify(body)) : undefined;

    // Default options are marked with *
    // test API url: https://pokeapi.co/api/v2/pokemon?limit=151
    const response = await fetch(url, currentParams)
      .then(response => response.json())
      .then(json =>
      {
        console.log('results of api call ', json);
        setData(json)
      })
      .catch(error =>
      {
        console.log(error.message);
        setData(error.message);
      }); // parses JSON response into native JavaScript objects
  }

  return (
    <React.Fragment>
      <Header />
      <h3>Request Parameters:</h3>
      { requestParams ?
        <>
          <div>Request Method: { requestParams.method }</div>
          <div>URL: { requestParams.url }</div>
          { requestParams.body ?
            <div>Body: { requestParams.body }</div> :
            undefined
          }
        </> :
        undefined
      }

      <Form
        handleRequestParams={ handleRequestParams }
      />

      <Results
        data={ data }
        displayValue={ "Loading..." }
      />

      <Footer />
    </React.Fragment>
  );
};

export default App;
