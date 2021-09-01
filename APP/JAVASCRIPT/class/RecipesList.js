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

  // Ici la fonction pour retourner le tableau de recette demander par l uttilisateur

  makeRecipesListToDisplay(userRequest) {
    let SortedRecipes;
    if (userRequest.value.length >= 3) {
      SortedRecipes = this.getSortedRecipesList();
      console.log(SortedRecipes);

      console.log(
        `%c${SortedRecipes.length} recette(s)  trouvé correspondant a vos critéres`,
        "color: red; font-family:sans-serif; font-size: 15px;font-weight:bolder"
      );
    } else {
      SortedRecipes = this.recipesList;
    }

    this.printCard(SortedRecipes);

    return SortedRecipes;
  }
}
