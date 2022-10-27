import './results.scss';
//import List from './list/List';
import { useEffect, useState } from 'react';
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
      <pre data-testid="test-results">
        { props.data
          ?
          JSON.stringify(props.data, undefined, 2)
          :
          props.displayValue }
      </pre>
    </section>
  )
}

export default Results;
