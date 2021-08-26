import { removeAccents, capitalizeFirstChar } from "../utils/string.js";

export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
    this.filteredRecipes = [];
  }

  getAllIngredients() {
    const AllIngredients = new Set();
    for (let recipe of this.recipes) {
      // console.log(recipe);
      for (let i = 0; i < recipe.ingredients.length; i++) {
        AllIngredients.add(
          capitalizeFirstChar(recipe.ingredients[i].ingredient)
        );
      }
    }
    return [...AllIngredients];
  }

  // retourne toute les appareils disponible (premiere lettre en majuscule) pour les afficher dans le dropdown associée
  getAllAppliance() {
    const appliances = new Set();

    for (let recipe of this.recipes) {
      appliances.add(capitalizeFirstChar(recipe.appliance));
    }

    return [...appliances];
  }

  getAllUstensils() {
    const AllUstensils = new Set();

    for (let recipe of this.recipes) {
      for (let i = 0; i < recipe.ustensils.length; i++) {
        AllUstensils.add(capitalizeFirstChar(recipe.ustensils[i]));
      }
      // console.log(recipe);
    }
    return [...AllUstensils];
  }

  filterRecipe(userRequest) {
    let search = removeAccents(userRequest.string);

    let filteredRecipes = this.recipes.filter(function (recipe) {
      if (recipe.nameNoAccent.includes(search)) {
        return recipe;
      }
    });
    this.recipes = filteredRecipes;

    return this.recipes;
  }
}
