import './results.scss';
// syntax highlighter, to make json 'prettier'
import SyntaxHighlighter from 'react-syntax-highlighter';
//import List from './list/List';
//import { useEffect, useState } from 'react';

/* TODO

  O <Results /> sees the new API data as a prop and 
    O renders the JSON

    Note: 
    O update your <Results /> component to use a 3rd party component to “pretty print” the JSON in a color-coded, user-friendly format
*/

function Results(props)
{
  //let [ results, setResults ] = useState([]);

  /*
  function processResults()
  {
    useEffect(() =>
    {
      JSON.stringify(props.data, undefined, 2).then(json => setResults(json))
    }, [ props.data ]);
  }
  */

  return (
    <section>
      <h3>Results:</h3>
      {/* <pre data-testid="test-results">
        { props.data
          ?
          JSON.stringify(props.data, undefined, 2)
          :
          props.displayValue }
      </pre> */}
      <SyntaxHighlighter
        role="code"
        language="javascript"
        data-testid="test-results"
      >
        { props.data ? JSON.stringify(props.data, undefined, 2) : props.displayValue }
      </SyntaxHighlighter>
    </section>
  )
}

export default Results;
