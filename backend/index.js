const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./database");
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
