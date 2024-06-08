import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
  
    // Validation: Check if any field is empty
    if (!username || !email || !password) {
      next(errorHandler(400,'All fields are required'))
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
      next(error)
    }
  };
  