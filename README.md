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

&nbsp;
