import mongoose from 'mongoose';

const connectDB = (url) => mongoose.connect(url);

export default connectDB;

// mongoose.connect('mongodb://127.0.0.1:27017/localtest');

// const User = mongoose.model('User', {
//   name: { type: String },
//   email: { type: String },
//   password: { type: String },
// });

// const me = new User({
//   name: 'MongTest',
//   email: 'mongtest@mongmail.com',
//   passwer: 'passw0rd',
// });

// me.save();

// import mongodb from 'mongodb';
// mongodb.MongoClient.connect('mongodb://127.0.0.1:27017', (error, client) => {
//   if (error) return console.log('Unable to connect to DB.');
//   console.log('Connected!');
// });
