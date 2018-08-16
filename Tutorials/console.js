// The files runs a console (prompt) and prompts for username and password

// You will have to install prompt
// npm install prompt --save
const prompt = require('prompt');

var schema = [
    {
        name: 'username',
        pattern: '^[a-zA-Z]+$',
        message: "Password must only contain alphabetical letters.",
        required: true
    },
    {
        name: 'password',
        hidden: true,
        replace: '*'
    }
];


prompt.start();
prompt.get(schema, function (err, result) {

    console.log('username: ' + result.username);
    console.log('password: ' + result.password);
});