// Create web server
// 1. create web server
// 2. create route
// 3. handle request
// 4. send response

// 1. create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. create route
app.get('/', (req, res) => {
  // 3. handle request
  res.send('Hello World!');
});

// 4. send response
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});