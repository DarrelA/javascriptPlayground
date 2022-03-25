#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) =>
  err ? console.log(err) : console.log(filenames)
);
