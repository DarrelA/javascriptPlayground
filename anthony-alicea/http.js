const http = require('http');
const fs = require('fs');

/*
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync(__dirname + '/../index.html', 'utf-8');
    const message = 'Hello from http.js in anthony-alicea folder!';
    html = html.replace('{Message}', message);
    res.end(html);
  })
  .listen(4000, '127.0.0.1');
*/

/* #################################################################### */

http
  .createServer((req, res) => {
    if (req.url === '/') fs.createReadStream(__dirname + '/../index.html').pipe(res);
    else if (req.url === '/api') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const obj = { firstName: 'Bohn', lastName: 'Foe' };
      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(4000, '127.0.0.1');

// Using streams to improve performance

// Why is res.end() not needed here?
// Cause when the stream reaches the end of our file it emits an end event.

/* #################################################################### */
