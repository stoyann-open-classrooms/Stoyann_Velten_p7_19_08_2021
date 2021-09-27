import { removeAccents, capitalizeFirstChar } from "../utils/string.js";
import { Utils } from "../utils/utils.js";
export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
  }

  getAllIngredients() {
    const AllIngredients = new Set();

    for (let recipe of this.recipes) {
      for (let i = 0; i < recipe.ingredients.length; i++) {
        AllIngredients.add(
          capitalizeFirstChar(recipe.ingredients[i].ingredient)
        );
      }
    }

    return [...AllIngredients];
  }

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
    }
    return [...AllUstensils];
  }

  filterRecipe(request) {
    let sortedRecipes = [];

    if (request.searchBarValue.length >= 3) {
      sortedRecipes = this.recipes.filter((recipe) =>
        recipe.stringifyRecipes.includes(request.searchBarValue)
      );
    } else if (request.tagSelecteed.length >= 0) {
      console.log("ok");
      sortedRecipes = this.recipes.filter((recipe) =>
        recipe.stringifyRecipes.includes(request.tagSelecteed)
      );
    }

    if (sortedRecipes.length === 0) {
      const noResults = `
            <div class="no-results">
            <p>Aucune recette ne correspond à votre critère...</p>
            <p>Vous pouvez chercher 'tarte au pommes', 'poisson', ect.</p>
        </div>
            `;
    }
    return sortedRecipes;
  }
}
