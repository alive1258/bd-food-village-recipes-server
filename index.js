const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allRecipes = require("./data/recipes.json");
app.use(cors());

app.get("/", (req, res) => {
  res.json({ massage: "hello" });
});
app.get("/recipes", (req, res) => {
  res.send(allRecipes);
});


app.listen(port, () => {
  console.log(`dragon api is running on port ${port}`);
});


