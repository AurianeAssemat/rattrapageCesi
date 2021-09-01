const express = require('express');
const http = require('http');
const url = require('url');

const app = express();
const server = http.createServer(app);
var port = 8282;

server.listen(port, function(){
	console.log("Server listenning on "+port+" !");
});

app.get('/', function(req, res){
	var txt = '<!DOCTYPE HTML><html><head><meta charset="utf8" /><title>App Node Js</title></head><body> ' +
			'<style>h1 {color: #00A0DD; text-align: center; font-family:Verdana; } p {text-align:center; font-family:Calibri; } '+
			'a.href {font-family:Calibri; } a:link {color:blue;} a:visited{color:blue;}</style></style><h1>Accueil</h1><br><br><p>Bienvenue</p>' +
			'<br><br><p><form id="messageCesi" name="messageCesi"  action="/echo" method="GET" >' +
			'Message : <input id="message" name="message" type="text" maxlength="250"><br>'+
			'<input type="submit" value="Valider"></form></p></body></html>'
	res.writeHead(200, {"Content-Type": "text/html"})
	res.write(txt)
	res.end()
});


app.get('/echo', function(req, res){
	var message = url.parse(req.url, true).query.message;
	var txt ='<!DOCTYPE HTML><html><head><meta charset="utf8" /><title>Rattrapage</title></head>'+
		'<body><style>h1 {color: #00A0DD; text-align: center; font-family:Verdana; } p {text-align:center; font-family:Calibri; } '+
		'a.href {font-family:Calibri; } a:link {color:blue;} a:visited{color:blue;}</style>'+
		'<h1>Echo !</h1><br><p>'+message+'</p><br><br><p><a href="/">Accueil</a></p></body></html>'
	res.writeHead(200, {"Content-Type": "text/html"})
	res.write(txt)
	res.end()
});