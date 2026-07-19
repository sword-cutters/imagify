import userModel from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register
export const registerUser = async (req, res) => {
  try {
    console.log('Register request received:', req.body); // Added for debugging
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: 'All fields required' });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({ name, email, password: hashedPassword, creditBalance: 5 });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ success: true, token, user: { id: newUser._id, name, email }, credits: newUser.creditBalance });
  } catch (err) {
    console.error('Register error:', err); // Added for debugging
    res.status(500).json({ success: false, message: err.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    console.log('Login request received:', req.body); // Added for debugging
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ success: false, message: 'Incorrect password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ success: true, token, user: { id: user._id, name: user.name, email }, credits: user.creditBalance });
  } catch (err) {
    console.error('Login error:', err); // Added for debugging
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get Credits
export const userCredits = async (req, res) => {
  try {
    console.log('Credits request for user:', req.userId); // Added for debugging
    const user = await userModel.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, user, credits: user.creditBalance });
  } catch (err) {
    console.error('Credits error:', err); // Added for debugging
    res.status(500).json({ success: false, message: err.message });
  }
};