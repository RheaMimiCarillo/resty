import React, { useState, useEffect } from "react";
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
//import axios from 'axios';


/* TODO

  O <App /> does a check on the request data from the form and 
    O updates the request variable in state with the 
      O url, 
      O method, and 
      O potentially the body

  O <App /> has an effect hook 
    O that’s looking for changes to the request variable in state, and in response, 
      X runs the API request with the new request options from state
  
  O <App /> updates state with the results of the API Request
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

    //callApi();
    // return () =>
    // {
    //   console.log('return from requestParams change');
    // }
  }, [ requestParams ]);

  const handleRequestParams = (formData) =>
  {
    // spread operator to trigger re-render with new object
    setRequestParams({ requestParams, ...formData })
  }

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
      }
      );

    return response; // parses JSON response into native JavaScript objects
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
