/* `fetch` notes */

// Example implementation:
async function callApi(url = '', data = {}, method = 'GET')
{
  // Default options are marked with *
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

callApi('https://example.com/answer', { answer: 42 })
  .then((data) =>
  {
    console.log(data); // JSON data parsed by `data.json()` call
  });
