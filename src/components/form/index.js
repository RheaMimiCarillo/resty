import { useState } from "react";
import './form.scss';
//import Form from 'react-bootstrap/Form';

/* TODO

  // Expects a function to be sent to it as a prop
  
  // Renders a URL entry form

  A selection of REST methods to choose from (“get” should be the default)
    The active selection should be displayed/styled differently than the others

  Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request

  On submit
    // Send the Form entries back to the <App> using the method sent down in props
    Form will run the API request
    Toggle the “loading” status before and after the request

*/

function Form(props)
{
  let [ input, setInput ] = useState('');
  // default method is GET
  let [ method, setMethod ] = useState('GET');
  // default input area is 'text' box
  let [ inputBox, setInputBox ] = useState('text');
  // json input data for PUT and POST
  let [jsonInput, setJsonInput] = useState('');

  function handleSubmit(e)
  {
    e.preventDefault();
    const formData = {
      method: method,
      url: input,
    };
    props.handleApiCall(formData);
  }

  async function handleMethod(e)
  {
    e.preventDefault();
    // update method in state onClick of button
    // update the input's type onClick
    let selectedMethod = e.target.id.toUpperCase();
    console.log('selected method: ', selectedMethod);
    await setMethod(selectedMethod);
  }

  function handleJsonInput(e)
  {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label className="url">
        <span>URL: </span>
        <input
          name='url'
          as={ inputBox }
          onChange={ (e) => setInput(e.target.value) }
        />
        <button type="submit" className="button">GO!</button>
      </label>
      <label className="methods">
        <span id="get" onClick={ handleMethod }>GET</span>
        <span id="post" onClick={ handleMethod }>POST</span>
        <span id="put" onClick={ handleMethod }>PUT</span>
        <span id="delete" onClick={ handleMethod }>DELETE</span>
      </label>

      { method === 'PUT' || method === 'POST'
        ?
        <label className="jsonInput">
          <textarea
            name='jsonInput'
            onInput={ handleJsonInput(e) }>
          </textarea>
        </label>
        :
        undefined
      }
    </form>
  )
}

export default Form;
