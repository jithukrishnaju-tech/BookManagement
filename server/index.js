const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
port = 3000;
const router = require("./routes/bookroutes");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());
app.use(express.json()); //Allows to request from anywhere from client to server
app.use("/books", router);
mongoose
  .connect(
    "mongodb+srv://jithukrishnaju111:Krishna%402002@cluster0.kp07yro.mongodb.net/bookmanagement"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  });
