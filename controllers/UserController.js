const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  static async regiterUser(req, res) {
    try {
      const { username, password } = req.body;
      const findAlredyUser = await User.findOne({ username });
      if (findAlredyUser) {
        return res.status(400).json({ error: "User Alredy exsits" });
      }

      // password convert into hasedPassword
      const hasedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ username, password: hasedPassword });
      await newUser.save();

      res.status(201).json({ message: "User registered Successfully" });
    } catch (error) {
      console.log("Error registering user:", error);
      res.status(500).json({ error: "Internal server Error" });
    }
  }
  static async loginUser(req, res) {
    try {
      const { username, password } = req.body;

      // ? find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: "Invalid Username" });
      }

      // ! check password is correct or not

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }

      // * create jwt Token for authentication
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
      res.status(200).json({ token });
    } catch (error) {
      console.log("Error logging in: ", error);
      res.status(500).json({ error: "Internal server Error" });
    }
  }
}

module.exports = UserController;
