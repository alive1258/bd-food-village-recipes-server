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
app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedNews2 = allRecipes.find((n) => n._id === id);
  res.send(selectedNews2);
});

app.listen(port, () => {
  console.log(`dragon api is running on port ${port}`);
});
