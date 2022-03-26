#!/usr/bin/env node

const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const program = require('caporal');
const colors = require('colors');

program
  .version('0.0.1')
  .argument('[filename]', 'Name of a file to execute')
  .action((args) => console.log(args));

program.parse(process.argv);

const start = debounce(() => console.log("STARTING USER'S PROGRAM".green), 100);

chokidar
  .watch('.')
  .on('add', start)
  .on('change', () => console.log('FILE CHANGED'.brightYellow))
  .on('unlink', () => console.log('FILE UNLINKED'.brightRed));
