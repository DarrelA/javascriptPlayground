## About The Project

- The Modern Javascript Bootcamp Course (2022)
- The most up-to-date JS resource online! Master Javascript by building a beautiful portfolio of projects!
- Tutorial for E-Commerce App
- [Colt Steele](https://github.com/Colt)
- [Stephen Grider](https://github.com/StephenGrider)

&nbsp;

## Installation

1. Install NPM packages.

```sh
npm install
```

2. Rename '.env.template' to '.env' and put your own COOKIE_KEY.

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

### Notes taken from Cookie Based Authentication comment section:

> <b>Clayton: </b>Cookies vs. JWT

> <b>Kamil: </b>Very debatable topic. No matter what content you consume around web auth and JWT, a recurring theme seems to re-surface time and time again. Given its current architecture, JWT will not replace the robustness of session + cookie based authentication. There, I wrote it.

> In all seriousness, though, JW tokens tokens are great but suitable for a very particular use-case. For instance, inter service communication (micro-service architecture). Generating short-lived links (download buttons to initiate a downloading process etc)

> The key factor is that the token's purpose has to be controlled tightly eg - short lived duration , duration must be short-lived. In terms of user authentication flow, I may consider using JWT when generating short-lived , one-off tokens , for example, during password reset flow or something like that . For everything else, I use sessions + cookies

> I am including a few resources for you :

- [General Authentication on the web](https://www.youtube.com/watch?v=2PPSXonhIck)
- [Node JS Auth -- may seem familiar to people coming from Colt's web developer bootcamp](https://www.youtube.com/watch?v=i7of02icPyQ)

Articles:

1. http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/
2. http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/
3. https://www.ducktypelabs.com/5-mistakes-web-developers-should-avoid-when-using-jwts-for-authentication/
4. https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#jwt_security

&nbsp;
