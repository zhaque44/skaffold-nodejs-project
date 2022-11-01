const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.status(200).send({ message: 'Local Development: Hello World!' });
});

app.listen(3000, () => {
  console.log('Server is running!');
});
