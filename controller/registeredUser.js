// import { get } from 'mongoose';
import User from '../models/user.js';

const getRegisteredUsers = async (req, res) => {
    try {
      const users = await User.find({}, { _id: 0, __v: 0 });
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error.' });
    }
  };
export default getRegisteredUsers