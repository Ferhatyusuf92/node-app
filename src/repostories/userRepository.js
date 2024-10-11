const User = require("../models/user.js");

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const createUser = async (body) => {
  const user = await User.create(body);
  return user;
};

const updateUser = async (id, body) => {
  await User.update(body, {
    where: {
      id: id,
    },
  });
  const user = await User.findByPk(id);
  return user;
};

const deleteUser = async (id) => {
  const result = await User.destroy({
    where: {
      id: id,
    },
  });
  if (result) {
    return "user deleted";
  } else return "";
};
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
