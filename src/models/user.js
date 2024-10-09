const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const User = sequelize.define(
    'User',
    {
        id: {
          type: DataTypes.UUID,
          primaryKey: true, 
          defaultValue: DataTypes.UUIDV4         
         
        },
      // Model attributes are defined here
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      password: {
        type: DataTypes.STRING,
        allowNull:true,
        // allowNull defaults to true
      },
    },  
  );
  
  module.exports = User