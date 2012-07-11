#TDevShortener - NodeJS Wrapper [![Build Status](https://secure.travis-ci.org/TotenDev/TDevShortener-LibNode.png?branch=master)](http://travis-ci.org/TotenDev/TDevShortener-LibNode)#
=========================
TDevShortener has been developed by TotenDev team, as an internal system with the main principle of been a private and simple shortener for anyone who wants it. This is the NodeJS Wrapper for shortening your own URL in your own [TDevShortener] (https://github.com/TotenDev/TDevShortener).

Usage
=========================
    var Shortener = require('./TDevShortener.js');
    Shortener("http://foo.com",function (okay,resp) {
	    if (okay) {
			console.log("My shortened URL is: " + resp);
		}
	});
	
	
License
=========================
[GNU GENERAL PUBLIC LICENSE V3](TDevShortener/raw/master/LICENSE)