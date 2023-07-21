// backend/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {  type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(email);
      },
      message: 'Invalid email address',
    },},
  age: { type: Number, required: true },
  phoneNumber: { type: Number, required: true, unique: true },
});

const User = mongoose.model('users', userSchema);
export default User;
