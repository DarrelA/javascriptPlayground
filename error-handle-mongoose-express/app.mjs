import express from 'express';
import authRouter from './authRouter.mjs';
import errorHandlerMiddleware from './errorHandlerMiddleware.mjs';
import connectDB from './mongoose.mjs';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Debugging Error Handling Middleware!');
});

app.use('/auth/', authRouter);

app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB('SOMEAPIKEY');
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
