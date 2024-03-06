const Recipe = require("../models/Recipe");

class RecipeController {
  // Creating
  static async createRecipe(req, res) {
    try {
      const { title, description, ingredients, instructions } = req.body;

      // ? create a new respice

      const newRecipe = new Recipe({
        title,
        description,
        ingredients,
        instructions,
      });
      await newRecipe.save();

      res
        .status(201)
        .json({ message: "Recipe created Successfully", recipe: newRecipe });
    } catch (error) {
      console.log("Error creating recipe", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //   getting recipe

  static async getRecipe(req, res) {
    try {
      const { recipeId } = req.params;

      // * find the recipe ID

      const recipe = await Recipe.findById(recipeId);
      if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }

      res.status(200).json({ recipe });
    } catch (error) {
      console.log("Error retrieving recipe", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // update Recipe
  static async updateRecipe(req, res) {
    try {
      const { recipeId } = req.params;
      const { title, description, ingredients, instructions } = req.body;

      const updatedRecipe = await Recipe.findByIdAndUpdate(
        recipeId,
        { title, description, ingredients, instructions },
        { new: true }
      );
      if (!updatedRecipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }
      res.status(200).json({
        message: "Recipe updated successfully",
        recipe: updatedRecipe,
      });
    } catch (error) {
      console.log("Error updating recipe", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async deleteRecipe(req, res) {
    try {
      const { recipeId } = req.params;
      const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

      if (!deletedRecipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }
      res.status(200).json({
        message: "Recipe deleted successfully",
        recipe: deletedRecipe,
      });
    } catch (error) {
      console.log("Error deleting recipe", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = RecipeController;
