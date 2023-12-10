const express = require("express");
const mongoose = require("mongoose");
const app = express();
port = 3000;
const router = require("./routes/bookroutes");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
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
