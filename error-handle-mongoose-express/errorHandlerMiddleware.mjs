const errorHandlerMiddleware = (err, req, res, next) => {
  try {
    console.log('congrats you hit the error middleware');
    res.status(404).json(err.message);
  } catch (err) {
    res.status(500).send('An unknown error occurred.');
  }
};

export default errorHandlerMiddleware;
