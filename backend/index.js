const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./database");
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api/", require("./Routes/CreateUser"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
