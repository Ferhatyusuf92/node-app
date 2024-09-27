const userRepository = require('../repostories/userRepository.js');


const getUsers = async(req, res) => {
    try {
      const users = await userRepository.getUsers();
      res.status(200).send(users);      
    } catch (error ) {
      res.status(500).send({ message: " Database error"});
    }
};

const getUserById = (req, res) => {
    res.send(userRepository.getUserById());
};

const createUser = async (req, res) => {
  console.log(req.body);
    try {
      const user = await userRepository.createUser(req.body);
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send({ message : "Database error" });
    }
  };

const updateUser = (req, res) => {
    res.send(userRepository.updateUser());
};

const deleteUser = (req, res) => {
    res.send(userRepository.deleteUser());
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

