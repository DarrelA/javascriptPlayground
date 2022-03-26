## About The Project

- The Modern Javascript Bootcamp Course (2022)
- The most up-to-date JS resource online! Master Javascript by building a beautiful portfolio of projects!
- Tutorial for E-Commerce App
- [Colt Steele](https://github.com/Colt)
- [Stephen Grider](https://github.com/StephenGrider)

&nbsp;

## Notes

#### Parsing Form Data

- <code>req.on() is similiar to addEventListener()</code>
- [emitter.on(eventName, listener)](https://nodejs.org/docs/latest/api/events.html#emitteroneventname-listener)

```js
app.post('/', (req, res) => {
  req.on('data', (data) => {
    const parsed = data.toString('utf8').split('&');
    const formData = {};
    for (let pair of parsed) {
      const [key, value] = pair.split('=');
      formData[key] = value;
    }
    console.log(formData);
  });
```

#### Middlewares in Express

```js
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
```

&nbsp;

#### Data Storage

- Data Store -> Hard Drive (products.json & users.json)

  - Will have error if we try to open/ write to the same file twice at the same time.
  - Won't work if we havev multiple servers running on different machines.
  - We have to write to the FS every time we want to update some data.

- <b>Repository Approach: </b>A single class (repository) is responsible for data access. All records are stored and used as plain JS objects.
- <b>Active Record Approach: </b>Every record is an instance of a 'model' class that has methods to save, update, delete this record.

&nbsp;

### Notes taken from Different Data Modeling Approaches comment section:

> <b>Alejandra: </b>Different Data Modeling Approaches

> <b>Stephen: </b>Depends on how you are interfacing with Mongodb. If you're using the mongodb driver directly, that thing follows the repository approach. If you are working with mongodb using mongooseJS, that uses the ActiveRecord approach.

&nbsp;
