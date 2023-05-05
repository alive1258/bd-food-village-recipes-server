const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allRecipes = require("./data/recipes.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send('recipes is comming');
});
app.get("/recipes", (req, res) => {
  res.send(allRecipes);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedRecipe = allRecipes.find((n) => n._id === id);
  res.send(selectedRecipe);
});

app.listen(port, () => {
  console.log(`dragon api is running on port ${port}`);
});
