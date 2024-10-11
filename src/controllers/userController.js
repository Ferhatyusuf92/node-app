const { status } = require("express/lib/response.js");
const userRepository = require("../repostories/userRepository.js");

const getUsers = async (req, res) => {
  try {
    const users = await userRepository.getUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: " Database error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const result = await userRepository.getUserById(req.params.id);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Database error" });
  }
};

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await userRepository.createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: "Database error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await userRepository.updateUser(req.params.id, req.body);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Database error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await userRepository.deleteUser(req.params.id);

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Database error" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
