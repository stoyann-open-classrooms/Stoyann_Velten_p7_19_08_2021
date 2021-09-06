import { removeAccents, capitalizeFirstChar } from "../utils/string.js";
import { Utils } from "../utils/utils.js";
export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
  }

  getAllIngredients() {
    const AllIngredients = new Set();
    const search = document.getElementById("ingredient-inp");

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

  // Ici la fonction pour retourner le tableau de recette demander par l uttilisateur

  makeRecipesListToDisplay() {
    const searchBar = document.getElementById("search-bar");
    let sortedRecipe = [];
    searchBar.addEventListener("input", (e) => {
      console.log(searchBar.value);

      if (searchBar.value.length >= 3) {
        sortedRecipe = this.recipes.filter((recipe) => {
          return recipe.stringifyRecipes.includes(
            Utils.removeAccents(searchBar.value)
          );
        });
        console.log(
          `%c${sortedRecipe.length} recette(s)  trouvé correspondant a vos critéres`,
          "color: red; font-family:sans-serif; font-size: 15px;font-weight:bolder"
        );
        console.table(sortedRecipe);
        return (this.recipes = sortedRecipe);
      }
    });
    return this.recipes;
  }
}
