//
// TDevShortener — TDevShortener-LibNode
// today is 7/10/12, it is now 19:25 PM
// created by TotenDev
// see LICENSE for details.
//

/*Modules*/
var http = require('http');
var TDShortenerDomain = "xxx.com";

/* Shortener UltilityClass */
module.exports = function (address,callback) { return new TDevShortener(address,callback); }
//Constructor
var TDevShortener = function(address, callback) { this.shortIt(address,callback); }

/**
 *	run
 **/
TDevShortener.prototype.shortIt = function shortIt(url,callback){
	var options = {
		'host'		: TDShortenerDomain,
		'port'		: 80,
		'path'		: "/create/",
		'method'	: "POST"
	};
	var req = http.request( options, function(res){
		res.setEncoding('utf8');
		res.on('data', function(data){ 
			if (data) callback(true,data); 
			else callback(false,"Server data is empty!");
		});
		res.on('error', function(err){ console.log("shorting error: " + err); callback(false,err); });
	});
	req.on('error', function(err){  console.log("shorting error: " + err); callback(false,err); });
	req.write(url);
	req.end();
}