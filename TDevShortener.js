//
// TDevShortener — TDevShortener-LibNode
// today is 7/10/12, it is now 19:25 PM
// created by TotenDev
// see LICENSE for details.
//

//CONFIG
var TDShortenerEndpointDomain = "tdev.mobi";
var TDShortenerEndpointPort = 80;

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
		'host'		: TDShortenerEndpointDomain,
		'port'		: TDShortenerEndpointPort,
		'path'		: "/create/",
		'method'	: "POST",
		'headers'	: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': body.length
		}
	};
	var responded = false;
	var req = http.request( options, function(res){
		var respContainer = "";
		res.on('data', function(data){ respContainer += data; });
		res.on('end',function () { 
			if (!responded) {
				responded = true;
				if (respContainer && res.statusCode == 200) callback(true,respContainer); 
				else callback(false,"Server bad statusCode: " + res.statusCode);
			}
		});
	});
	req.on('error', function(err){ 
		if (!responded) { responded = true; callback(false,err); }
	});
	req.write(body);
	req.end();
}