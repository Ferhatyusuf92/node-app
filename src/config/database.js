const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

let connection;

const shouldResetTables = true;

const initializeConnection = async () => {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
    });
    if (shouldResetTables) {
      await resetTable();
    }

    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

const resetTable = async () => {
  const dropUserTableQuery = ` DROP TABLE IF EXISTS USERS`;
  const createUserTableQuery = `CREATE TABLE USERS (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255) not null,
  email varchar(255) not null,  
  password varchar(200) not null);`;

  try {
    await connection.query(dropUserTableQuery);
    await connection.query(createUserTableQuery);
    console.log("Table reset");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeConnection,
  getConnection: () => connection,  
  
 };
