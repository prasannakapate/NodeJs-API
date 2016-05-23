var express = require('express'),
  mongoose = require('mongoose');

var db = mongoose.connect('mongodb://demo:demo@ds025802.mlab.com:25802/bookapi');
var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

app.use('/api', bookRouter);

bookRouter.route('/Books')
  .get(function(req, res) {
    Book.find(function(err, books) {
      if (err) {
        console.log(err);
      } else {
        res.json(books);
      }
    });
  });
app.get('/', function(req, res) {
  res.send('welcome to my API');
});

app.listen(port, function() {
  console.log('Gulp is running my app on PORT: ' + port);
});
