const xmlrpc = require ("davexmlrpc");

var config = {
	port: 80,
	xmlRpcPath: "/rpc2"
    }
    
function Sum(a, b) {
    return a + b;
}

xmlrpc.startServerOverHttp (config, function (request) {
	switch (request.verb) {
		case "Sum":
			if (request.params.length > 1) {
                //request.returnVal (undefined, request.params [0].toUpperCase ());
                var sum = Sum(params[0], params[1])
                request.returnVal (undefined, request);
				}
			else {
				request.returnVal ({message: "There must be at least 2 parameter."});
				}
			return (true); //we handled it
		}
	return (false); //we didn't handle it
	});