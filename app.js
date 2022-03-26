const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

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

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Account created!');
});

app.listen(port, () => console.log(`E-Commerce app listening on port ${port}`));
