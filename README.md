##TDevShortener - NodeJS Wrapper [![Build Status](https://secure.travis-ci.org/TotenDev/TDevShortener-LibNode.png?branch=master)](http://travis-ci.org/TotenDev/TDevShortener-LibNode)##
=========================

TDevShortener has been developed by TotenDev team, as an internal system, with the main principle of been a private and simple shortener. This is the NodeJS Wrapper for shortening your own URL in your own [TDevShortener] (https://github.com/TotenDev/TDevShortener).


##Getting Started##
=========
This is a simple TDevShortener Wrapper in NodeJS.


##Usage##
=========
    var Shortener = require('./TDevShortener.js');
    Shortener("http://foo.com",function (okay,resp) {
	    if (okay) {
			console.log("My shortened URL is: " + resp);
		}
	});