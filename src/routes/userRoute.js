const express = require('express');
const { getUsers, getUserById, creatUser, updateUser, deleteUser } = require('../controllers/userController.js');
const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', creatUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
