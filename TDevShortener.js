//
// TDevShortener — TDevShortener-LibNode
// today is 7/10/12, it is now 19:25 PM
// created by TotenDev
// see LICENSE for details.
//

/*Modules*/
var http = require('http');
var TDShortenerDomain = "www.tdev.mobi";

/* Shortener UltilityClass */
module.exports = function (address,callback) { return new TDevShortner(address,callback); }
//Constructor
var TDevShortener = function(address, callback) { TDevShortener.shortIt(address,function(data){ callback(data); }); }

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
			else callback(false,null);
		});
		res.on('error', function(err){ console.log("shorting error: " + err); callback(false,null); });
	} );
	req.on('error', function(err){  console.log("shorting error: " + err); callback(false,null); });
	req.write(url);
	req.end();
}