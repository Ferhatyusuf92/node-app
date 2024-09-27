const { getConnection } = require('../config/database.js');

const getUsers =  async() => {    
    const connection = getConnection();
    const sql = 'SELECT * FROM USERS';
    const [users] = await connection.query(sql);
    return users;
};

const getUserById = (req, res) => {   
    
};


const createUser = async (body) => {
    const connection = getConnection();
    const sql = 'INSERT INTO users (username, email , password) VALUES (?, ?,?)';
    const [result] = await connection.query(sql, [body.username, body.email, body.password]);
    return { id: result.insertId, ...body };
  };

const updateUser = (req, res) => {
   return 'Update user'
};

const deleteUser = (req, res) => {
    return 'Delete user'
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};