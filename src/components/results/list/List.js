// syntax highlighter, to make json 'prettier'
import SyntaxHighlighter from 'react-syntax-highlighter';

import './list.scss';
function List(props)
{
  return (
    <div className="results">
      {
        props.data.results.map((result, idx) =>
          <div key={ idx }>
            <div className="result">
              {idx}
              <SyntaxHighlighter
                role="code"
                language="javascript"
              >
                { JSON.stringify(result, undefined, 2) }
              </SyntaxHighlighter>
            </div>
          </div>)
      }
    </div>
  )
}
export default List;
