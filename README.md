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

- [npm "validator" vs "express-validator"](https://stackoverflow.com/questions/49748710/npm-validator-vs-express-validator#:~:text=validator%20is%20a%20library%20to,the%20box%20using%20validator%20lib.)
- [MDN FormData API](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

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

### Express-Validator package Error Handling

- [mapped()](https://express-validator.github.io/docs/validation-result-api.html)
- <b>Gotcha: </b>Cannot read property msg of property undefined or something similiar when there is no error with email.
  - Refer to <code>signup.js</code> for the try...catch solution.

```js
const getError = (errors, props) => {
  if (errors) return errors.mapped()[props].msg;
  // errors.mapped() ===
  //   {
  //     password: {
  //       msg: 'Password too short',
  //     },
  //     passwordConfirmation: {
  //       msg: 'Passwordmust match',
  //     },
  //   };
};
```

&nbsp;

### 4 Different Methods of Image Storage

- Load Balancer <b>randomly</b> assign to server.

1. Co-Located Disk (Cannot scale the application with multiple servers.)
2. Database (Cost is high)
   - [AWS Amazon RDS for PostgreSQL Database Storage](https://aws.amazon.com/rds/postgresql/pricing/)
   - [imgur statistics](https://expandedramblings.com/index.php/imgur-statistics/)
   - [Amazon S3](https://aws.amazon.com/s3/pricing/?nc=sn&loc=4)
3. Stream through to Datastore (Outside Data Store for Files)
   - Much cheaper than Database approach.
   - Amazon S3, Digital Ocean Spaces, Google Cloud Storage.
   - However servers are still required to process the image before uploading to datastore.
4. Presigned URL (Best but complicated)
   - Browser make initial request to server to upload file.
   - Server will response with presigned URL with a configuration.
   - Give user a 1 time access to the datastore to upload the image(s).

&nbsp;

### Understanding a Shopping Cart

- Problems:

  1. How do we tie a cart to a person who will never be logged in?
  2. Even if we can identify who is trying to add an item to a cart, how do we tie a product to a cart?

- Solutions
  1. Save cart id in cookie and products repository. This means we have to iterate through all products to figure out what product belong to which user. Products repository should contain data about products and nothing else. This will be an issue if the number of cart id increases over time.
  2. Save cart id to carts repository and save the entire product. We are making a copy in the carts repository. Updating products in products repository will make information in cart repository out of date.
  3. Save carts id to cart repository and save only the id of the product and cart quantity. Easy products repository update. Easy to search by product id.

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

### Notes taken from Salting Passwords comment section:

- [NodeJS: bcrypt vs native crypto](https://stackoverflow.com/questions/6951867/nodejs-bcrypt-vs-native-crypto)
- [Rainbow Table](https://en.wikipedia.org/wiki/Rainbow_table)

> <b>Arik: </b>Stephen suggests concatenating the salt value to the hashed value and separating these 2 values with a delimiter (like '/', etc.). The concatenated value should be saved in the database. My question is what happens if the data base is compromised and an attacker gets access to the concatenated value. Wouldn't it be pretty straight forward for the attacker to try either of the values as a salt (remember that these values are visually separated by a delimiter)?

> <b>Stephen: </b>Remember the purpose of the salt - it defeats a 'rainbow table' attack. If the attacker knows the salt, then they would still have to create a rainbow table from scratch and try to look up the users password with it. That process would be really computationally expensive for an attacker, which is the primary goal of including the salt.

> <b>Arik: </b>Thank you Stephen for the prompt response! Could you please describe the steps that the attacker will have to follow in order to build the rainbow table from scratch once he knows the salt?

> <b>Stephen: </b>

```js
const crypto = require('crypto');

const hashedAndSalted =
  '4211bfcad8d3def24d04b9d88d4a08cdff7fefab77974c86e0e9394ae1ab9a6061f2dbf6d3389f3e9aa870f65e9070e88537f7f89af3d861705c89b46558a342.76e8d9f3f6b98cd7';

const commonPasswords = [
  '123456',
  'password',
  '123456789',
  '12345678',
  '12345',
  '111111',
  '1234567',
  'sunshine',
  'qwerty',
  'iloveyou',
  'princess',
  'admin',
  'welcome',
  '666666',
  'abc123',
  'football',
  '123123',
  'monkey',
  '654321',
  '!@#$ %^&*',
  'charlie',
  'aa123456',
  'donald',
  'password1',
  'qwerty123',
];

const [hash, salt] = hashedAndSalted.split('.');
const table = {};

for (let pw of commonPasswords) {
  const commonHash = crypto.scryptSync(pw, salt, 64).toString('hex');
  table[commonHash] = pw;
}

if (table[hash]) {
  console.log(`Found pw = ${table[hash]}`);
} else {
  console.log('Could not find a matching pw');
}
```

> 'hashedAndSalted' is one of the hashed + salted passwords that I used in the real project. That's the PW we are trying to guess. The 'commonPasswords' array is a list of the 25 most common passwords used (form here: https://en.wikipedia.org/wiki/List_of_the_most_common_passwords). My real password was...."password", so it definitely shows up in that list.

> <b>Arik: </b> First thing - I really appreciate the great support that you are providing! If we go back to my original question, by using salt we make the attacker hash each common password N times (where N is the number of password entries in the database, once for each unique salt). This will increase the complexity of building the rainbow table by the factor of N. And thus additional computational resources (especially in the event of a high number of users in the system). Am I correct?

> <b>Stephen: </b> Yep, you are 100% correct.

&nbsp;

### Notes taken from Salting Passwords comment section:

> <b>Kaustav: </b> Why are we using promise based version of scrypt using utils.promisify ???

> <b>Kamil: </b> Crypto.scrypt() is an asynchronous method. By default, this method adheres to callback-pattern that is typical in Node JS environment. Why would we want to promisify it ? ----> to maintain code flow

> In short, to mitigate callback-hell and prevent potential with scope and timing-issues ,where parts of your code depend upon previous outcomes ,we can consider using async await alternative.

```js
 try {
      const records = await this.getAll();
      const salt = crypto.randomBytes(10).toString("hex");
      const buf = await scrypt(attrs.password, salt, 64);
        ^---^---^
        first part
      const record = {
        ...attrs,
        id: this.assignRandomId(),
        password: `${buf.toString("hex")}.${salt}`,
       ^---^---^
        second part, depending upon outcome of the first
      };
      records.push(record);
        ^---^---^
        third part, depending upon outcome of the second
      return record;
    } catch (error) {}
```

> scrypt ,when successful , returns a buffer , which ,in turn, gets converted into hexadecimal format for readability. Eventually, this hexadecimal value gets stored inside your user record. The newly-updated user record is returned back to us. Can you see how different aspects of your code inter-relate ? ( I have highlighted the 3 parts in code )

> 1. With callback-based solution, preserving code flow could get messy real quick.
> 2. This is where Async await can help us maintain our sanity.
> 3. But for async await to work, we must promisify the scrypt function

&nbsp;

### Notes taken from Adding Custom Validators comment section:

> <b>Beata: </b> .withMessage()

> <b>Kamil: </b> I want to take this opportunity to expand upon the location where to attach withMessage() method. It can <b>only</b> be chained to a <b>validator</b> - either custom or built-in. <b>withMessage() method cannot be chained onto a sanitiser.</b>

> Whenever you are transforming the value, you are using a sanitiser:

> - trim()
> - normalizeEmail()
> - toFloat()

> Whenever you find yourself posing questions about the value, you are using a validator

> - isEmail()
> - isLength()
> - isIBAN()
> - custom()

> A good rule of thumb is to transform data first then ask questions about the validity of their freshly-transformed state.

> - check("email")
> - trim() <--transform value
> - normalizeEmail() <-- transform value
> - isEmail() <-- ask questions about the value

&nbsp;

> <b>Mattia: </b>I have learned before that validation should be done in the model side of the app per the principle of "fat models and slim controllers". Why then adding all this logic in the controller? It seems bad to me, am I wrong?

> <b>Stephen: </b>Ideally, we would have two levels of validation - one for data coming into a route handler, and one around saving records. It is important to have validation on data coming into the route handler, as it will keep us from running a bunch of logic only to later find out that some input the user provided is not valid.

&nbsp;

### Notes taken from Understanding a Shopping Cart - Solving Problem #2 comment section:

> <b>Ashish: </b> Why are we creating a new carts repository as opposed to storing the cart data on a cookie?

> The items in a cart are very specific to the browser since the user is not logged in. In this case wont it be better to store the cart information (cart id and associated product ids and quantities on a cookie. Why does it need to go into a repository, which then will have to be tied to the cookie anyway and the information on the cart will have to be pulled out from the respository. This approach can make more sense for logged in users, where a cart can be tied to a user id and can be display even if the user logs in using a different browser.

> <b>Kmail: </b>Generally speaking, there are multiple variables that you may wish to consider before proceeding with cookies:

> - some people tend to reject cookies. This would hinder your shopping cart experience
> - ensure you comply with local laws (data protection)
> - inconsistent size limitation across web browsers - how much info do you wish to store ?

> Other points to consider:

> - Will you allow users to access their cart cross-device ?
> - Given cookie size limitations, how would address a scenario in which a particular user created multiple carts (would you even permit it?)

> Will you implement analytics to gain an insight into people's preferences ? - in general terms, since you are not capturing personal data. How would you deal with product availability if multiple anonymous users placed the same item in their cart in quick succession, but only half of those would continue the check-out process. These are just some questions/scenarios you may wish to consider.

&nbsp;

### Notes taken from Submission Options comment section:

> <b>Ben: </b> data attributes vs hidden input

> <b>Kmail: </b> another aspect worth noting is graceful degradation. <b>What if your end-user disabled JS completely?</b> Hidden input fields are submitted as part of HTML forms. Form submission would still be able to work, provided the user actually clicked the "SUBMIT" button to initiate the submission process. Form's Action attribute would dictate where the data gets submitted to, where they can be validated/sanitised and what not. Apart from supplying ID values, hidden fields are also useful for <b>transmitting csrf tokens to mitigate cross-site request forgery</b>.

&nbsp;
