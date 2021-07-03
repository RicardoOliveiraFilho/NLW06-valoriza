import express from 'express';

const app = express();

app.get('/teste', (req, res) => {
  return res.send('Olá NLW!');
});

app.post('/teste-post', (req, res) => {
  return res.send('Olá NLW - Método POST!');
});

app.listen(3000, () => console.log('Server is running...'));
