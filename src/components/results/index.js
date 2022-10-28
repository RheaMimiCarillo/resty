import './results.scss';
// syntax highlighter, to make json 'prettier'
import SyntaxHighlighter from 'react-syntax-highlighter';
import List from './list/List';
//import { useEffect, useState } from 'react';


function Results(props)
{
  //let [ results, setResults ] = useState([]);

  /* effect to process api results and set to state
  useEffect(() =>
  {
    
  }, [ props.data ]);
  
  */

  return (
    <section>
      <h3>Results:</h3>

      { props.data ?
        <>
          <div>Count: { JSON.stringify(props.data.count, undefined, 2) }</div>
          <List data={ props.data } data-testid="test-results" />
        </>
        : props.displayValue }
    </section>
  )
}

export default Results;
