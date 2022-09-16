#! /usr/bin/env node

import { ssg_ } from './index.js';
import { program } from 'commander';

program
  .option('-v, --version', 'output the current version')
  .option('-f, --file <type>', 'input file')
  .option('-d, --dir <type>', 'input directory')
  .option('-i --input <iteam> ', 'gets the input')
  .option('-h --help', 'help');

program.parse(process.argv);
if (program.version) {
  console.log('Version details: 0.1');
  console.log('Name of the package:' + 'ssg');
}

if (program.opts().file) {
  console.log('file:' + program.opts().file);
  ssg_(program.opts().file);
}

if (program.opts().dir) {
  console.log('dir:' + program.opts().dir);
  ssg_(program.opts().dir);
}
if (program.opts().help) {
  console.log('help:' + program.opts().help);
}
if (program.opts().input) {
  console.log('input:' + program.opts().input);
  ssg_(program.opts().input);
}
