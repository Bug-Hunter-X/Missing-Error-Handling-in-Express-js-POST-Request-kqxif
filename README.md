# Missing Error Handling in Express.js POST Request

This repository demonstrates a common error in Express.js applications: missing error handling for POST requests.  The `bug.js` file shows a server that doesn't handle cases where the request body is missing or malformed, leading to potential crashes or unexpected behavior.  The `bugSolution.js` provides a corrected version with proper error handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install express` to install the required dependency.
3. Run `node bug.js` to start the server.
4. Send a POST request to `/users` with an empty or malformed body (e.g., using Postman or curl).

You will notice that the server doesn't handle the error gracefully.

## Solution

The `bugSolution.js` file shows how to handle errors properly by checking for the presence and validity of the request body before processing it. This prevents unexpected behavior and provides more robust error handling.