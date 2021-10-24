import { Utils } from "../utils/Utils.js";
export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
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
    // sortedRecipes = this.recipes.filter(function (recipe) {
    //   if (
    //     recipe.stringifyRecipes.includes(Utils.removeAccents(request.userInput))
    //   ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    for (let i = 0; i < this.recipes.length; i++) {
      if (
        this.recipes[i].stringifyRecipes.includes(
          Utils.removeAccents(request.userInput)
        )
      ) {
        sortedRecipes.push(this.recipes[i]);
      }
    }
    this.recipes = sortedRecipes;
    return this.recipes;
  }
  searchByTags(request) {
    let sortedRecipes = [];

    console.log(request);
    for (let i = 0; i < this.recipes.length; i++) {
      if (
        this.recipes[i].stringifyRecipes.includes(
          Utils.removeAccents(request.tags)
        )
      ) {
        sortedRecipes.push(this.recipes[i]);
      }
    }
    console.log(sortedRecipes);
    this.recipes = sortedRecipes;
    return this.recipes;
  }
}
