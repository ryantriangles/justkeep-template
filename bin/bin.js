#!/usr/bin/env node

const path = require('path');
const ncp = require('ncp').ncp;
ncp.limit = 5;

let currentDir = path.resolve('.');

ncp(path.join(__dirname, '..', 'copy'), currentDir, err => {
	if (err) {
		return console.error(err);
	}
	console.log('Good to go!');
});
