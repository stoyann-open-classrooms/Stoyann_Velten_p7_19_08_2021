import { removeAccents, capitalizeFirstChar } from "../utils/string.js";
// import { Request } from "./Request.js";
export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
    this.value = [];
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

  filterRecipes(filter) {
    let filteredRecipes = [];
    if (filter.string.length >= 3) {
      // console.log(filter.string);
      for (let recipe of this.recipes) {
        if (recipe.name.toLowerCase().includes(filter.string)) {
          filteredRecipes.push(recipe);
        }
      }
    }
    if (filteredRecipes.length === 0) {
      // console.log(
      //   `Aucune recette ne correspond à vos critères... Vous pouvez chercher "tarte aux
      //   pommes", "poisson", ect...`
      // );
    } else if (filteredRecipes.length >= 1) {
      console.log(
        `${filteredRecipes.length} recette(s) trouvés avec vos critére de recherche`
      );
      console.table(filteredRecipes);
    }

    return filteredRecipes;
  }

  //   // fonction callBAck test
  //   callback(cb) {
  //     this.recipes.forEach((el) => {
  //       cb(el.name);
  //     });
  //   }
}
