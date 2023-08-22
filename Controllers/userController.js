
const UserModel = require('../models/usermodel'); 

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.createUser = async (req, res) => {
  try {
    const { id,fullName, email, bio, city, state, country, password } = req.body;

    const newUser = new UserModel({
      id,
      fullName,
      email,
      bio,
      city,
      state,
      country,
      password
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Server error' });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const user = await UserModel.findOne({ id: req.params.userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { id: req.params.userId },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    await UserModel.findOneAndRemove({ id: req.params.userId });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


