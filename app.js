const express = require('express');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');

const app = express();
const port = 3000;

require('dotenv').config();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [process.env.COOKIE_KEY] }));
app.use(authRouter);
app.use(productsRouter);

app.listen(port, () => console.log(`E-Commerce app listening on port ${port}`));
