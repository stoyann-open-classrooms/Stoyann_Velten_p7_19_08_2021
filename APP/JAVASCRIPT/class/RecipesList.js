import { removeAccents, capitalizeFirstChar } from "../utils/string.js";

export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
  }

  getAllIngredients() {
    let AllIngredients = [];
    this.recipes.forEach((recipe) => {
      for (let ingredient of recipe.ingredients) {
        AllIngredients.push(ingredient.ingredient);
      }
    });
    return new Set(AllIngredients);
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
    let AllUstensils = [];
    this.recipes.forEach((recipe) => {
      for (let ustensil of recipe.ustensils) {
        AllUstensils.push(ustensil);
      }
    });
    return new Set(AllUstensils);
  }

  filterRecipes(input) {
    for (let recipe of this.recipes) {
      console.log(recipe.nameNoAccent);
    }
    console.log(input);
  }
}
