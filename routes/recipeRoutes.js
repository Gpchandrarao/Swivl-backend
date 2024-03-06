const express = require("express");

const RecipeController = require("../controllers/RecipeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, RecipeController.createRecipe);
router.get("/:recipeId", RecipeController.getRecipe);
router.put("/:recipeId", authMiddleware, RecipeController.updateRecipe);
router.delete("/:recipeId", authMiddleware, RecipeController.deleteRecipe);

module.exports = router;
