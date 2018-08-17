// Timeouts and intervals, a way to callback after a delay
// Timeouts run a method once after x seconds, intervals run a method every x seconds.

var timeoutCount = 0;
var intervalCount = 0;

setTimeout(function () {
    timeoutCount++;
    console.log("Set timeout > ", timeoutCount);
}, 1000);

setInterval(function () {
    intervalCount++;
    console.log("Set interval > ", intervalCount);
}, 1000);

