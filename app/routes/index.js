'use strict';

var path = process.cwd();
var useragent = require('useragent');
module.exports = function (app) {
	
	app.route('/')
		.get(function (req, res) {
		res.sendFile(path + '/public/index.html');
		});

	app.route('/api/whoami')
		.get(function (req, res) {

			var ip = req.ip;
			var language = req.headers["accept-language"] 
			var agent = useragent.parse(req.headers['user-agent']);
			var software = agent.os.toString(); 
			res.send({"ipaddress":ip,"language":language, "software":software});
		
		});
		
};
