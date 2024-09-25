const express = require("express");
const users = require("./routes/userRoute.js");
const { initializeConnection } = require("./config/database.js");

const app = express();

const port = 3000;

app.use("/users", users);

app.listen(port, async () => {
  await initializeConnection();
  console.log(`Example app listening on port ${port}`);
});
