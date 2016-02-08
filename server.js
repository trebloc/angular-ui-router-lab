// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();

// serve static files from public folder
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/public', express.static(__dirname + '/public'));


// this is a catch all, any URL not matched gets index.html
// e.g. http://localhost:3000/asdf33  -> index.html
app.get('/*', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('express running');
});
