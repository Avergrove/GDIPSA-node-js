// This is the client side of the popquiz application

// The files runs a console (prompt) and prompts for username and password

// You will have to install prompt
// npm install prompt --save
const prompt = require('prompt');
const request = require('request');
const colors = require('colors/safe');

const QUESTION_URL = 'http://localhost:1337/popquiz'
const ANSWER_URL = 'http://localhost:1337/answer'

prompt.start();

// Fetch a question.
request(QUESTION_URL, function (err, response, body) {
    console.log('error: ', err);
    console.log(body);

    let question = JSON.parse(body);
    console.log("  Q: " + question.question);
    question.answers.forEach(element => {
        console.log("    " + element.selection + ": " + element.value);
    });

    answer(question);
    // a
})

// Answer a question
function answer(jsonQuestion) {

    var userAnswer;
    prompt.message = colors.rainbow("QUESTION ");
    prompt.get(['answer'], function (err, result) {
        userAnswer = result.answer;

        // Create a JSON to send    
        var inputAnswer = {
            answer: userAnswer
        }

        request({
            url: ANSWER_URL,
            method: "POST",
            json: inputAnswer
        },
            function (err, response, body) {
                console.log(body);
            })

    })


}



