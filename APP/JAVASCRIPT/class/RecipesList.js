import { removeAccents, capitalizeFirstChar } from "../utils/string.js";

// import { Request } from "./Request.js";
export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
    this.filterRecipes = [];
    this.value = [];
  }

  getAllIngredients() {
    const AllIngredients = new Set();
    for (let recipe of this.recipes) {
      console.log(recipe);
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
      console.log(recipe);
      AllUstensils.add(capitalizeFirstChar(recipe.ustensils));
    }

    return [...AllUstensils];
  }

  filterRecipes(filter) {
    if (filter.string.length >= 3) {
      for (let recipe of this.recipes) {
        if (recipe.name.toLowerCase().includes(filter.string)) {
          console.log(recipe);
          this.filteredRecipes.push(recipe);
        }
      }
    }
    if (this.filteredRecipes.length === 0) {
      console.log(
        `Aucune recette ne correspond à vos critères... Vous pouvez chercher "tarte aux
        pommes", "poisson", ect...`
      );
    } else if (this.filteredRecipes.length >= 1) {
      console.log(
        `${filteredRecipes.length} recette(s) trouvés avec vos critére de recherche`
      );
    }
    // console.table(filteredRecipes);

    return filteredRecipes;
  }

  //   // fonction callBAck test
  //   callback(cb) {
  //     this.recipes.forEach((el) => {
  //       cb(el.name);
  //     });
  //   }
}
