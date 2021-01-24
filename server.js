const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;
require("dotenv").config();

const app = express();

app.use(logger("dev"));

app.use(compression());

//parse data comng through the port, decrypyt it. also defines req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows access to the public folder on the client side.
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI_NEW || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
