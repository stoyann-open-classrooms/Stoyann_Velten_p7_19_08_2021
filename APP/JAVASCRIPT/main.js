import { RECIPES } from "./data/datas.js";
import { Recipe } from "./class/Recipes.js";
import { RecipesList } from "./class/RecipesList.js";
import { inputAnim } from "./animations/inputAnim.js";

inputAnim();
console.log(RECIPES);

const recipesList = new RecipesList();

RECIPES.forEach((recipe) => {
  recipesList.addRecipe(
    new Recipe(
      recipe.id,
      recipe.name,
      recipe.servings,
      recipe.ingredients,
      recipe.time,
      recipe.description,
      recipe.appliance,
      recipe.ustensils
    )
  );
});

recipesList.recipesList.forEach((recipe) => {
  recipe.printCards;
  recipe.printIngredientsList;
});

console.log(recipesList);
