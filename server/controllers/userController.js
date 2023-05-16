const {Request, Response}  = require("express");
const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { promisify } = require('util');
const bcryptHash = promisify(bcrypt.hash);

const User = require("../models/userModel.js");
const { checkPassword } = require("../utils/password/checkPassword.js");

const register = async (req, res) => {
    const { username, email, password, role } = req.body;
    console.log(req);
    try {
      // check for duplicate users
      const duplicateUser = await User.findOne({
        $or: [{ username: username }, { email: email }],
      });
      if (duplicateUser) {
        return res.status(409).json({
          message: "The username or the email you're trying to use is already used.",
        });
      }
    
      const saltRounds = 10;
  
      const hash = await bcrypt.hash(password, saltRounds);
  
      // create new user
      const user = new User({
        username,
        email,
        role,
        password: hash,
      });
      
      try {
        await user.save();
        // create token
        const payload = {
          user: {
            username: user.username,
            email: user.email,
            userId: user._id,
            role: user.role,
            password: user.password,
          },
        };
        const token = jwt.sign(payload, "RANDOM-TOKEN", { expiresIn: "24h" });
        console.log(password);
        console.log(email);
        return res.status(200).json({
          message: "New user successfully created ! 🔥",
          token,
        });
      } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Error creating user' });
      }
    } catch (error) {
      console.log("Register error:\n", error);
      return res.status(500).json({ message: 'Error creating user' });
    }
  
  };
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).send("nop");
    }

    // check if password is correct
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // create token
      const payload = {
        user: {
          username: user.username,
          email: user.email,
          userId: user._id,
        },
      };
      const token = jwt.sign(payload, "RANDOM-TOKEN", { expiresIn: "24h" });

      res.status(200).send({
        message: "Logged successfully 🔥",
        token,
      });
    }
  } catch (error) {
    console.log("Login error:\n", error.message);
    return res.status(500).json(error.message);
  }
};

module.exports = { login, register };
