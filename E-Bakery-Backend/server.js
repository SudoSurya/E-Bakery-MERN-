const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const NewProductSchema = require("./NewProductSchema");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors({ origin: "*" }));
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.nkarxtv.mongodb.net/?retryWrites=true&w=majority",
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

app.get("/", (req, res) => {
  res.send("EndPoints And Backend Working");
});

app.post("/newproduct", async (req, res) => {
  try {
    const { P_name, P_category, P_price, P_image, P_stock } = req.body;

    let NewProduct = new NewProductSchema({
      P_name,
      P_category,
      P_price,
      P_image,
      P_stock,
    });

    await NewProduct.save();
    res.status(200).send("Product Added Successfuly");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Error");
  }
});

app.get("/products", async (req, res) => {
  try {
    let data = await NewProductSchema.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
