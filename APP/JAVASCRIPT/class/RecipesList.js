import { removeAccents, capitalizeFirstChar } from "../utils/string.js";

export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
    this.value = [];
  }

  // get userRequest() {
  //   const searchBarInput = document.getElementById("search-bar");

  //   searchBarInput.addEventListener("input", (e) => {
  //     const filters = {
  //       value: searchBarInput.value,
  //       selectTag: [],
  //     };
  //   });

  //   // if (searchBarInput.length > 2) {
  //   //   filters.value = searchBarInput.value;
  //   //   console.log({ userInput: this.value.splice(" ") });
  //   //       if (searchBarInput.keyCode = "entrée") {
  //   //          filters.selectTag.push(searchBarInput.value),
  //   //            searchBarInput.value = "",
  //   //      }
  //   //     }
  //   //      return filters
  //     //   });
  //     // }
  //   }
  // }

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

  filterRecipes() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", (e) => {
      console.log(searchBar.value);
    });
    let filterRecipes = [];
    for (let recipe of this.recipes) {
      if (recipe.name.includes("chocolat")) {
        filterRecipes.push(recipe);
        console.log(recipe);
      }
    }
    return (filterRecipes = RecipesList);
  }

  // fonction callBAck test
  callback(cb) {
    this.recipes.forEach((el) => {
      cb(el.name);
    });
  }
}
