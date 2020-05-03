var express = require('express');
app = express();

app.get('/', function(req, res) {
    res.send('Hello World!\n');
});

app.get('/mars', function(req, res) {
    res.send('Hello Mars!\n');
});
//este es un cambio
app.listen(8180, function() {
    console.log('Example app listening on port 8180!');
});
