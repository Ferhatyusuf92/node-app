const express = require("express");
const users = require("./routes/userRoute.js");
const sequelize = require("./config/database.js");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = 3000;

app.use("/users", users);

app.listen(port, async () => {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
  console.log(`Example app listening on port ${port}`);
});
