import { Utils } from "../utils/Utils.js";
export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
    this.Allrecipes = recipes;
  }
  getAllRecipes() {
    this.recipes = this.Allrecipes;
    return this.Allrecipes;
  }
  // retourne tous les ingredients de la liste recipes
  getAllIngredients() {
    const AllIngredients = new Set();

    for (let recipe of this.recipes) {
      for (let i = 0; i < recipe.ingredients.length; i++) {
        AllIngredients.add(recipe.ingredients[i].ingredient);
      }
    }

    return [...AllIngredients];
  }

  // retourne tous les appareils de la liste recipes
  getAllAppliance() {
    const appliances = new Set();

    for (let recipe of this.recipes) {
      appliances.add(recipe.appliance);
    }

    return [...appliances];
  }

  // retourne tous les ustensiles de la liste recipes
  getAllUstensils() {
    const AllUstensils = new Set();

    for (let recipe of this.recipes) {
      for (let i = 0; i < recipe.ustensils.length; i++) {
        AllUstensils.add(recipe.ustensils[i]);
      }
    }
    return [...AllUstensils];
  }

  // ================================ algo de recherche numero 2
  search(request) {
    let sortedRecipes = [];

    if (request.tags.length > 0) {
      for (let tag in request.tags) {
        sortedRecipes = this.recipes.filter(
          (recipe) =>
            recipe.stringifyRecipes.includes(
              Utils.removeAccents(request.tags[tag])
            ) &&
            recipe.stringifyRecipes.includes(
              Utils.removeAccents(request.userInput)
            )
        );
      }
    } else if (request.userInput != "") {
      sortedRecipes = this.recipes.filter((recipe) =>
        recipe.stringifyRecipes.includes(Utils.removeAccents(request.userInput))
      );
    }

    this.recipes = [...new Set(sortedRecipes)];

    return this.recipes;
  }
}
