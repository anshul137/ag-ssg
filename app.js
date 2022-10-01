#! /usr/bin/env node
import { program } from 'commander';
import { ssg_ } from './index.js';
//import { version } from './package.json' assert { type: 'json' };

program
	.option('-v, --version', 'output the current version')
	.option('-i, --input <item>', 'gets the input')
	.option('-h, --help', 'help');

program.parse(process.argv);
if (program.version) {
	console.log('Name of the package: ' + ' ag-ssg');
	console.log('Version details: ' + ' 0.0.1');
	return 0;
}

if (program.opts().help) {
	console.log(
		'To run the code in terminal \n' +
			'npm install \n' +
			'npm link \n' +
			'node app.js -i  <item>  select the file or directory\n' +
			'node app.js -v --version to get the version details\n' +
			'node app.js -h --help  to get the option \n' +
			'Need to install all the dependencies such as npm  install , npm links , Build and run the project\n'
	);
}
if (program.opts().input) {
	console.log('input:' + program.opts().input);
	ssg_(`${program.opts().input}`);
}
