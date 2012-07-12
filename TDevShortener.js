//
// TDevShortener — TDevShortener-LibNode
// today is 7/10/12, it is now 19:25 PM
// created by TotenDev
// see LICENSE for details.
//

//CONFIG
var TDShortenerDomain = "xxs.com";
var TDShortenerPort = 80;

/*Modules*/
var http = require('http');

/* Shortener UltilityClass */
module.exports = function (address,callback) { return new TDevShortener(address,callback); }
//Constructor
var TDevShortener = function(address, callback) { this.shortIt(address,callback); }

/**
 *	run
 **/
TDevShortener.prototype.shortIt = function shortIt(url,callback){
	var body = "link="+url;
	var options = {
		'host'		: TDShortenerDomain,
		'port'		: TDShortenerPort,
		'path'		: "/create/",
		'method'	: "POST",
		'headers'	: {
			'Content-Type': 'application/x-www-form-urlencoded',
		    'Content-Length': body.length
		}
	};
	var response = false;
	var req = http.request( options, function(res){
		res.setEncoding('utf8');
		res.on('data', function(data){ 
			if (!response) {
				response = true;
				if (data && res.statusCode == 200) callback(true,data); 
				else callback(false,"Server bad statusCode: " + res.statusCode);
			}
		});
		res.on('error', function(err){ 
			if (!response) {
				response = true;
				callback(false,err);
			}
		});
		res.on('end',function () { 
			if (!response) {
				response = true;
				callback(false,null);
			}	
		});
	});
	req.on('error', function(err){ 
		if (!response) {
			response = true;
			callback(false,err);
		}
	});
	req.on('end',function () { 
		if (!response) {
			response = true;
			callback(false,null);
		}	
	});
	req.write(body);
	req.end();
}