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

  async function callApi(url = '', method = 'GET', body = '')
  {
    // Default options are marked with *
    // test API url: https://pokeapi.co/api/v2/pokemon?limit=151
    const response = await fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(json => {console.log('results of api call ', json);setData(json)});
 
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
            <div>Body: { requestParams.body }</div>:
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
