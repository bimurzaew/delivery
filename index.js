const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const chalk = require("chalk");
const fileUpload = require("express-fileupload");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("public", express.static(path.resolve(__dirname, "/client/public")));
app.use(require("./routes/index"));

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


mongoose
  .connect(process.env.SERVER_CONNECT)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        chalk.bgBlue.yellow.bold(
          `server has been started on port ${process.env.PORT}`
        )
      );
    });
    console.log(chalk.bgBlue.yellow.bold("database connect"));
  })
  .catch(() => {
    console.log(chalk.bgRed.yellow.bold(`error`));
  });
