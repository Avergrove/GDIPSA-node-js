// Usage: node server
// Server side of the popquiz application, hosts a service that provides questions to the client side

const express = require('express');
const bodyParser = require('body-parser')
// const path = require('path');

var app = express();

// Bind the router to the express app
var router = express.Router();

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));


app.use('/', router);

var popQuiz = {
    question: "What is my name?",
    answers: [{ selection: "a", value: "Lenneth" },
    { selection: "b", value: "Lenny" },
    { selection: "c", value: "Lennet" },
    { selection: "d", value: "Lan" }],
    correctAnswer: "a"
}

// The method is always called before forwarded to another route.
// Note: next() must be used otherwise the browser will receive no response.
router.use('/', function (request, response, next) {
    next();
});

// HTTP GET Service: Outputs a question
router.get('/popQuiz', function (request, response, next) {
    response.json(popQuiz);
});

// HTTP Post service: Accepts a question and answer
router.post('/answer', function (request, response, next) {
    console.log(request.body);

    // Check and compare the answers
    if (request.body.answer == popQuiz.correctAnswer) {
        response.send("You are correct!");
    }
    else {
        response.send("You are not correct...");
    }
})

app.listen(1337, function () {
    console.log('Listening on port 1337');
});