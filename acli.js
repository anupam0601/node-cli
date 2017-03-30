#!/usr/local/Cellar/node/7.1.0/bin/node
var vorpal = require('vorpal')();
var fs = require('fs');
var path = require('path');
var logCli = require('/Users/anupam/anupam/node-scripts/zmq-push-pull/tail_file.js');


// main cli
vorpal
    .delimiter('acli$')
    .show();

// Reads a file with specified path
vorpal
      .command('acli read <path>', 'Outputs "welcome to acli"')
      .action(function(args, callback) {

      	path = args.path;

        fs.readFile(path, 'utf8', function(err, contents) {
        	console.log(contents)
	     });
        callback();
    });

// Reads logfile
vorpal
	.command('acli log read', 'Reads log file')
	.action(function(){
		logCli.tailFile();
	});
