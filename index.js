const express = require('express')
const app = express()
const request = require('request')

app.get('/', function (req, res) {
  res.sendfile('public/index.html');
})

app.get('/alldogs/:dog', function (req, res) {
  res.sendfile('public/alldogs.html');
})

app.get('/data', (req, res) => {
  request('https://dog.ceo/api/breeds/image/random', (error, response, body) => {
    console.log('error:', error);
    res.json(body);
  });
});

app.get('/dogbreeds', (req, res) => {
  request('https://dog.ceo/api/breeds/list', (error, response, body) => {
    console.log('error:', error);
    res.json(body);
  });
});

app.get('/api/alldogs/:dog', (req, res) => {
  const dog = req.params.dog;
  request(`https://dog.ceo/api/breed/${dog}/images`, (error, response, body) => {
    console.log('error:', error);
    debugger;
    res.json(body);
  });
});

app.listen(8000, () => console.log('Example app listening on port 8000!'))
