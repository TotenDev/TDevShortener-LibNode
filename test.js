var Shortener = require('./TDevShortener.js');
Shortener("http://foo.com",function (okay,resp) {
    if (okay) console.log("My shortened URL is: " + resp);
	else console.log("Bad: " + resp); 
});