const mysql = require("mysql2/promise");

let connection;
const initializeConnection = async () => {
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Ff123456",
      port: 3306,
      database: "backend_app",
    });

    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeConnection };
