var express = require('express');

var app = express();

app.use(express.json());

//app.post('/', function(request, response){
//  console.log(request.body);      // your JSON
//   response.send(request.body);    // echo the result back
//});
app.post('/post', function(req, res){

    // get query params as object
    req.on('data', function(chunk) {
        console.log("Received body data:");
        console.log(JSON.parse(chunk) );
    });
});

app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/', express.static(__dirname + ''));
 
var server = app.listen(3001, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

