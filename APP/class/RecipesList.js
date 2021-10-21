import { Utils } from "../utils/Utils.js";
export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
  }

  getAllIngredients() {
    const AllIngredients = new Set();
    const input = document.getElementById("input-ingr");

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
    sortedRecipes = this.recipes.filter(function (recipe) {
      if (
        recipe.stringifyRecipes.includes(Utils.removeAccents(request.userInput))
      ) {
        return true;
      } else {
        return false;
      }
    });

    console.table(sortedRecipes);
    this.recipes = sortedRecipes;

    return this.recipes;
  }
}
