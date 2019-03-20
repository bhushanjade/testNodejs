const express = require('express');
const request = require('request');
//const bodyParser = require('body-parser');
var cors = require('cors')

// Set up the express app
const app = express();

app.use(cors())
//app.use(bodyParser.urlencoded({ extended: false }))

app.get('/get/books', (req, res) => {
  req.pipe(request.get(req.query.url, {
    'qs': {
      ...req.query
    }
  })).pipe(res);

});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
