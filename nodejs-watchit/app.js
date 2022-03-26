#!/usr/bin/env node

const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const program = require('caporal');
const fs = require('fs');
const { spawn } = require('child_process');
const colors = require('colors');

program
  .version('0.0.1')
  .argument('[filename]', 'Name of a file to execute')
  .action(async ({ filename }) => {
    const name = filename || app.js;

    try {
      await fs.promises.access(name);
    } catch (error) {
      throw new Error(`Could not find the file ${[name]}.`.brightRed);
    }

    // https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html#optionsstdio
    const start = debounce(
      () => spawn('node', [name], { stdio: 'inherit' }),
      100
    );

    chokidar
      .watch('.')
      .on('add', start)
      .on('change', start)
      .on('unlink', start);
  });

program.parse(process.argv);
