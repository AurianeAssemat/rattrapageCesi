const express = require('express');
const http = require('http');
const url = require('url');

const app = express();
const server = http.createServer(app);
var port = 8282;

server.listen(port, function(){
	logger.log('info', "Server listenning on "+port+" !");
});

app.get('/', function(req, res){
	filename = "./accueil.html";
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Page Not Found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});