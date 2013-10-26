#TDevShortener - NodeJS Wrapper

NodeJS module to send a messages to [TotenDev's URL Shortener](https://github.com/TotenDev/TDevShortener/)

[![Build Status](https://secure.travis-ci.org/TotenDev/TDevShortener-LibNode.png?branch=master)](http://travis-ci.org/TotenDev/TDevShortener-LibNode)
[![Code Climate](https://codeclimate.com/github/TotenDev/TDevShortener-LibNode.png)](https://codeclimate.com/github/TotenDev/TDevShortener-LibNode)

## Requirements

- [npm](https://github.com/isaacs/npm)
- [nodejs](https://github.com/joyent/node)

## Installation

No installation is needed, just use `TDevShortener.js` file.

## Configuration

Change on `TDevShortener.js`file, the server Domain and port (It should be at beginnig):

    //CONFIG
    var TDShortenerDomain = "xxs.com";
    var TDShortenerPort = 80;

##Usage

    var Shortener = require('./TDevShortener.js');
    Shortener("http://foo.com",function (okay,resp) {
	    if (okay) {
			console.log("My shortened URL is: " + resp);
		}
	});
	
	
## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

##License

[GPL v3](https://github.com/TotenDev/TDevShortener-LibNode/raw/master/LICENSE)
