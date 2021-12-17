import { Utils } from "../utils/Utils.js";
export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
    this.Allrecipes = recipes;
  }

  getAllIngredients() {
    const AllIngredients = new Set();

    for (let recipe of this.recipes) {
      for (let i = 0; i < recipe.ingredients.length; i++) {
        AllIngredients.add(recipe.ingredients[i].ingredient);
      }
    }

    return [...AllIngredients];
  }

  getAllAppliance() {
    const appliances = new Set();

    for (let recipe of this.recipes) {
      appliances.add(recipe.appliance);
    }

    return [...appliances];
  }

  getAllUstensils() {
    const AllUstensils = new Set();

    for (let recipe of this.recipes) {
      for (let i = 0; i < recipe.ustensils.length; i++) {
        AllUstensils.add(recipe.ustensils[i]);
      }
    }
    return [...AllUstensils];
  }

  search(request) {
    let sortedRecipes = [];

    console.log(request.tags.split(" "));

    if (request.tags.length > 0) {
      for (let i = 0; i < this.recipes.length; i++) {
        if (
          this.recipes[i].stringifyRecipes.includes(
            Utils.removeAccents(request.tags)
          )
        )
          if (
            this.recipes[i].stringifyRecipes.includes(
              Utils.removeAccents(request.userInput)
            )
          ) {
            sortedRecipes.push(this.recipes[i]);
          }
      }

      this.recipes = sortedRecipes;
      this.getAllAppliance();
      this.getAllIngredients();
      this.getAllUstensils();

      return this.recipes;
    }

    if (request.userInput.length > 2) {
      for (let i = 0; i < this.recipes.length; i++) {
        if (
          this.recipes[i].stringifyRecipes.includes(
            Utils.removeAccents(request.userInput)
          )
        ) {
          sortedRecipes.push(this.recipes[i]);
        }
      }

      // callback();

      this.getAllAppliance();
      this.getAllIngredients();
      this.getAllUstensils();

      this.recipes = sortedRecipes;

      return this.recipes;
    } else if (request.userInput.length <= 2 && request.tags === "") {
      this.recipes = this.Allrecipes;

      return this.recipes;
    }
  }
}
