import React, { useState } from "react";

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
/* TODO: convert App to functional component
  x 1. import usestate
  x 2. make states for each thing that needs it
  x 3. make handlers to catch input/change
  4. make handlers to handle submit events
  bonus: style page to look like a reputable search engine
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
    <React.Fragment>
      <Header />
      <div>Request Method: { requestParams.method }</div>
      <div>URL: { requestParams.url }</div>
      <Form handleApiCall={ callApi } />
      <Results
        data={ data }
        displayValue={ "Loading..." }
      />

      <Footer />
    </React.Fragment>
  );
};

export default App;
