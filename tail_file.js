// Tail a file for changes
var Tail = require('always-tail2');
var path = require('path');
var fs = require('fs');
var filename = "/Users/anupam/anupam/node-scripts/zmq-push-pull/log.txt";
//var filename = path.resolve('log.txt');

console.log(filename);
 
if (!fs.existsSync(filename)) fs.writeFileSync(filename, "");
 
var tail = new Tail(filename, '\n');
 
// Listening for tail events

var tailFile = function (){
	tail.on('line', function(data) {
	//publisher.send(data);
	console.log("got line:", data);

	})
};

//module.exports = tailFile;
exports.tailFile = tailFile;

tail.on('error', function(data) {
  console.log("error:", data);
});
 
var tailWatch = function(){
	tail.watch();
};

exports.tailWatch = tailWatch;




var fi = function(err){
	console.log("data");
}

exports.fi = fi;

