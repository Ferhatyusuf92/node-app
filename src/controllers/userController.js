const userRepository = require('../repostories/userRepository.js');


const getUsers = (req, res) => {
    res.send(userRepository.getUsers());
};

const getUserById = (req, res) => {
    res.send(userRepository.getUserById());
};

const creatUser = (req, res) => {
    res.send(userRepository.creatUser());
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
    creatUser,
    updateUser,
    deleteUser
};

