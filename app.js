const express = require('express');
const cookieSession = require('cookie-session');
const authRouuter = require('./routes/admin/auth');

const app = express();
const port = 3000;

require('dotenv').config();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [process.env.COOKIE_KEY] }));
app.use(authRouuter);

app.listen(port, () => console.log(`E-Commerce app listening on port ${port}`));
