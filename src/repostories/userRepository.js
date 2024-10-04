const { getConnection } = require("../config/database.js");

const getUsers = async () => {
  const connection = getConnection();
  const sql = "SELECT * FROM USERS";
  const [users] = await connection.query(sql);
  return users;
};

const getUserById = async (id) => {
  const connection = getConnection();
  const sql = "SELECT * FROM users WHERE id = ?";
  const [result] = await connection.query(sql, [id]);
  if (result.lenght === 0) {
    return "";
  }
  return result[0];
};

const createUser = async (body) => {
  const connection = getConnection();
  const sql = "INSERT INTO users (username, email , password) VALUES (?, ?,?)";
  const [result] = await connection.query(sql, [
    body.username,
    body.email,
    body.password,
  ]);
  return { id: result.insertId, ...body };
};

const updateUser = async (id, body) => {
  const connection = getConnection();
  const sql =
    "UPDATE users SET username = ?, email = ? , password = ? WHERE id = ?";
  const [result] = await connection.query(sql, [
    body.username,
    body.email,
    body.password,
    id,
  ]);
  if (result.affectedRows === 0) {
    return "";
  }
  return { id: id, ...body };
};

const deleteUser = async (id) => {
  const connection = getConnection();
  const sql = "DELETE FROM users WHERE id = ?";
  const [result] = await connection.query(sql, [id]);
  if (result.affectedRows === 0) {
    return "";
  }
  return "User deleted";
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
