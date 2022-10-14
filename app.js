#! /usr/bin/env node
import {program} from 'commander';
import {ssg_} from './index.js';
import {readFile} from 'fs/promises';
const json = JSON.parse(
	await readFile(new URL('./package.json', import.meta.url))
);

program
	.option('-v, --version', 'output the current version')
	.option('-i, --input <item>', 'gets the input')
	.option('-h, --help', 'help')
	.option('-l, --lang <item>', 'gets the language')
	.option('-c, --config <item>', 'get the config');

program.parse(process.argv);
if (program.version) {
	console.log('Name of the package: ' + ' ag-ssg');
	console.log('Version details: ' + json.version);
}

if (program.opts().help) {
	console.log(
		'To run the code in terminal \n' +
			'npm install \n' +
			'npm link \n' +
			'node app.js -i  <item>  select the file or directory\n' +
			'node app.js -v --version to get the version details\n' +
			'node app.js -h --help  to get the option \n' +
			'node app.js -l --lang  option for language support \n' +
			'node app.js -c --config  option for config support \n' +
			'Need to install all the dependencies such as npm  install , npm links , Build and run the project\n'
	);
}
if (program.opts().input) {
	console.log('input:' + program.opts().input);
	ssg_(`${program.opts().input}`);
}
//added feature in lab3 for language.
if (program.opts().lang) {
	console.log('language:' + program.opts().lang);
	ssg_(`${program.opts().input}`, `${program.opts().lang}`);
}

if (program.opts().config) {
	console.log('config: ' + program.opts().config);
	ssg_(null, null, program.opts().config);
}
