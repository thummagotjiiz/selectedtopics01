var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl'; //http://ws.cdyne.com/ip2geo/ip2geo.asmx?wsdl
var args = { name: 'director' };

soap.createClient(url, function (err, client) {
   // console.log(client);
    client.sayHello(args, function (err, result) {
        console.log(result);
    });
});