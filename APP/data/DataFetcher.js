import { Recipe } from "../class/Recipes.js";
import { RecipesList } from "../class/RecipesList.js";

export class DataFetcher {
  constructor(data) {
    this.data = data;
  }

  getRecipesList() {
    const recipes = [];

    for (let recipe of this.data) {
      recipes.push(
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
    }

    return new RecipesList(recipes);
  }
}
