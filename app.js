const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>
  res.send(/* html*/ `
    <div>
      <form method="POST">
        <input 
          name="email"
          type="text"
          placeholder="email" />
        <input 
          name="password"
          type="password"
          placeholder="password" />
        <input 
          name="passwordconfirmation"
          type="password"
          placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
`)
);

const bodyParser = (req, res, next) => {
  if (req.method === 'POST') {
    req.on('data', (data) => {
      const parsed = data.toString('utf8').split('&');
      const formData = {};
      for (let pair of parsed) {
        const [key, value] = pair.split('=');
        formData[key] = value;
      }
      req.body = formData;
      next();
    });
  } else next();
};

app.post('/', bodyParser, (req, res) => {
  console.log(req.body);
  res.send('Account created!');
});

app.listen(port, () => console.log(`E-Commerce app listening on port ${port}`));
