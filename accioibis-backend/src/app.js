require("dotenv").config();
require("./db/connection");
const express = require("express");
const app = express();
const url = require("./routes/url");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/", url);

app.get("/", (req, res) => {
  res.send("hello from backend");
});
app.get("*", (req, res) => {
  res.send("Unknown Resource");
});

//server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
