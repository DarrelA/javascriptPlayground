#!/usr/bin/env node

const fs = require('fs');
const utils = require('util');

// Basic
// fs.readdir(process.cwd(), (err, filenames) => {
//   err ? console.log(err) : console.log(filenames);
// });

// ************************************************************************************************** //

// BAD CODE HERE!!!! Run nls a couple times and focus on the files order.
// lstat needs time to get the data from hardrive.
// Need to console.log ONLY after all the callbacks are called.
/*
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) console.log(err);

  for (const filename of filenames) {
    fs.lstat(filename, (err, stats) =>
      err ? console.log(err) : console.log(filename, stats.isFile())
    );
  }
});
  */

// ************************************************************************************************** //

// Solution 1 - Difficulty to scale with additional complexity.
/*
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) console.log(err);

  const allStats = Array(filenames.length).fill(null);

  for (let filename of filenames) {
    const index = filenames.indexOf(filename);

    fs.lstat(filename, (err, stats) => {
      if (err) console.log(err);

      allStats[index] = stats;
      const ready = allStats.every((stats) => stats);
      //   const ready = !allStats.includes(null);

      if (ready)
        allStats.forEach((stats, index) =>
          console.log(filenames[index], stats.isFile())
        );
    });
  }
});
//   */

// ************************************************************************************************** //

// Solution 2 method 1
/*
fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) console.log(err);

  const lstat = (filename) =>
    new Promise((resolve, reject) => {
      fs.lstat(filename, (err, stats) => {
        if (err) reject(err);
        resolve(stats);
      });
    });

  for (const filename of filenames) {
    const stats = await lstat(filename);

    try {
      console.log(filename, stats.isFile());
    } catch (error) {
      console.log(error);
    }
  }
});
*/

// ************************************************************************************************** //

// Solution 2 method 2
/*
const lstat = utils.promisify(fs.lstat);

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) console.log(err);

  for (const filename of filenames) {
    const stats = await lstat(filename);

    try {
      console.log(filename, stats.isFile());
    } catch (error) {
      console.log(error);
    }
  }
});
*/

// ************************************************************************************************** //

// Solution 2 method 3
/*
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) console.log(err);

  //   for (const filename of filenames) {
  //     lstat(filename)
  //       .then((stats) => console.log(filename, stats.isFile()))
  //       .catch((err) => console.log(err));
  //   }

  for (const filename of filenames) {
    const stats = await lstat(filename);

    try {
      console.log(filename, stats.isFile());
    } catch (error) {
      console.log(error);
    }
  }
});
*/

// ************************************************************************************************** //

// Solution 3 - Best

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) console.log(err);

  const statPromises = filenames.map((filename) => lstat(filename));
  const allStats = await Promise.all(statPromises);
  for (const stats of allStats) {
    const index = allStats.indexOf(stats);
    console.log(filenames[index], stats.isFile());
  }
});

// ************************************************************************************************** //
