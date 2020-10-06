const xmlrpc = require ("davexmlrpc");

const urlEndpoint = "http://localhost/RPC2";
const verb = "Sum";//"examples.getStateName";
const params = [5,8];
 //an array containing one element, the number 5
const format = "xml"; //could also be "json"

xmlrpc.client (urlEndpoint, verb, params, format, function (err, data) {
	if (err) {
		console.log ("err.message == " + err.message);
		}
	else {
		console.log (JSON.stringify (data));
		}
	});