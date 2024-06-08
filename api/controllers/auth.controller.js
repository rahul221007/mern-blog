import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
export const signup = async (req, res) => {
    const { username, email, password } = req.body;
  
    // Validation: Check if any field is empty
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword=  bcryptjs.hashSync(password,10);//it has await inside it
  
    // Create a new user
    const newUser = new User({
      username,
      email,
      password:hashedPassword,
    });
  
    try {
      // Save the new user
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      // Handle errors during saving
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  };
  