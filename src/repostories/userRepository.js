const getUsers = (req, res) => {    
    return 'Get users'
};

const getUserById = (req, res) => {   
    return 'Get user by id'
};

const creatUser = (req, res) => {
    return 'Create user'
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
    creatUser,
    updateUser,
    deleteUser
};