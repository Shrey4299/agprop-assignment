const User = require("../models/usermodel"); // Adjust the path accordingly
const generateToken = require("../services/authService"); // Import the JWT generation function
const bcrypt = require("bcrypt");

// Controller function to handle user login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password hashes
    console.log(password)
    console.log(user.password)
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    if (password!=user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // If password matches, generate a token and send it in the response
    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
