// A tutorial file that demonstrates the use of routing

const express = require('express');
const path = require('path');

var app = express();

// Bind the router to the express app
var router = express.Router();
app.use('/', router);

// The method is always called before forwarded to another route.
// Note: next() must be used otherwise the browser will receive no response.
router.use('/', function (request, response, next) {
    console.log("Before calling home..");
    next();
});

// Note: Order matters! More specific cases should come first, otherwise they won't get run.
router.use('/home/somethingelse/', function (request, response, next) {
    response.json({ message: 'home/somethingelse' });
    next();
});

router.use('/home/', function (request, response, next) {
    response.json({ message: 'home' });
    next();
});

// Parameter example
// http://localhost:1337/group/5
router.get('/group/:id', function(request, response, next){
    var idValue = request.params.id;
    response.json({id: idValue});
})

// Query example
// Parameter example
// http://localhost:1337/group?id=5
router.get('/group/', function(request, response, next){
    var idValue = request.query.id;
    response.json({id: idValue});
})

// POST method query.
router.post('/group/', function(request, response, next){
    var idValue = request.query.id;
    response.json({id: idValue});
})

app.use(function (err, req, res, next) {

    console.log(err);
    console.log(__dirname);
    res.sendFile(__dirname + '/error.html');
})

app.listen(1337, function () {
    console.log('Listening on port 1337');

});