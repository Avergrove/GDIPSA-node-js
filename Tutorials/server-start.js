// "Javascript is 'messy'ively designed."

// Import to include HTTP module
const http = require('http')

// Create a webserver
http.createServer(function(req, res){
    
    // Write a response, write the content
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('HI MOM\n');

}).listen(1337, 'localhost');

console.log('Server is running and listening on port 1337');