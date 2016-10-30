/*var soap = require('soap-server');

function MyTestService() {
}
MyTestService.prototype.test1 = function (myArg1, myArg2) {
    return myArg1 + myArg2;
};

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new MyTestService());

soapServer.listen(1337, '127.0.0.1');*/
/*module.exports = require('soap');
var 	http = require('http'),
	httpProxy = require('http-proxy'),
	soap = require('soap-server'),
	util = require('util');
var 	host = {
    address:'127.0.0.1',
    port:{
        proxy:1337,
        server:1338
    },
    serverUri: function () {
        return util.format('http://%s:%d', this.address, this.port.server);
    },
    proxyUri: function () {
        return util.format('http://%s:%d', this.address, this.port.proxy);
    }
};
// Create a proxy server with custom application logic
var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function (req, res) {
    console.log('Request', JSON.stringify(req.headers, true, 2));
    req.on('data', function (data) {
        console.dir(data.toString());
    });
    proxy.web(req, res, { target: host.proxyUri() });
});
proxy.on('proxyRes', function (proxyRes, req, res) {
    proxyRes.on('data', function (data) {
        console.dir(data.toString());
    });
    console.log('Response', JSON.stringify(proxyRes.headers, true, 2));
});

function MyTestService() {
}
MyTestService.prototype.test1 = function (myArg1, myArg2) {
    console.log("test1 ", "" + myArg1, "" + myArg2);
    return myArg1 + myArg2;
};

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new MyTestService());

/////// PROXY START
console.log("Proxy listening on port: ", host.port.proxy);
server.listen(host.port.proxy);

////// SOAP START
soapServer.listen(host.port.server, host.address);

console.log('Server running at ', host.port.server);
console.log("wsdl: ", host.proxyUri(), '/testService?wsdl');*/
var http = require('http');
var soap = require('soap');
var xpath = require('xpath')
  , dom = require('xmldom').DOMParser;

var helloService = {
    Hello_Service: {
        Hello_Port: {
            sayHello: function (args) {
                var xml2 = '\movieG5.xml';
                var doc = new dom().parseFromString(xml2);
                console.log(doc);
                var query = xpath.select("//director.text()", doc).toString()
                return query;
               /* var val;
                if (args.licenseKey = '0') {
                    val = "hello";
                } else {
                    val = "good bye";
                }
                return {
                    returnNaJa: val
                };*/
            }
        }
    }
}
var xml = require('fs').readFileSync('HelloService.wsdl', 'utf8'),
      server = http.createServer(function (request, response) {
          response.end("404: Not Found: " + request.url)
      });
server.listen(8000);
soap.listen(server, '/wsdl', helloService, xml);
//http://localhost:8000/wsdl?wsdl
//https://www.npmjs.com/package/soap

