import './results.scss'

function Results(props)
{
  return (
    <section>
      <h3>Results:</h3>
      <pre>
        { props.data
          ?
          (JSON.stringify(props.data, undefined, 2))
          :
          props.displayValue }
      </pre>
    </section>
  )
}

export default Results;
