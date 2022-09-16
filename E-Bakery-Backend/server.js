const express = require("express");
const mongoose = require("mongoose");
const NewProductSchema = require("./NewProductSchema");
const app = express();
const PORT = process.env.PORT || 8080;

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.b70ousk.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((error) => console.error(error));

app.listen(PORT, () => {
  console.log("Server UP and Running");
});
