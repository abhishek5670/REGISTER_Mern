import User from '../models/user.js';

const registerUser = async (req, res) => {
  try {
    const { name, email, age, phoneNumber } = req.body;
    const existingUser = await User.findOne({ $or: [{ email:req.body.email }, { phoneNumber:req.body.phoneNumber }] })

    if (existingUser) {
      return res.status(400).json({ error: 'User with the same email or phone number already exists.' });
    }

    const newUser = new User({ name, email, age, phoneNumber });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};
export default registerUser