import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide first name.'],
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password.'],
    minlength: 6,
    maxlength: 30,
  },
});

export default mongoose.model('User', UserSchema);
