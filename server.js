const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

// To handle CORS error
var cors = require("cors");
app.use(cors());

// body parser for req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use express router
app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`Server is running on port: ${port}`);
});
