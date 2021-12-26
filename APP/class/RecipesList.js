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

  //fonction de recherche dans la liste recipes (retourne la listes des recettes trier)

  // algo 1 = boucle for

  search(request) {
    let sortedRecipes = [];

    console.log(request.tags);
    for (let i = 0; i < this.recipes.length; i++) {
      if (request.tags.length > 0) {
        for (let j = 0; j < request.tags.length; j++) {
          if (
            this.recipes[i].stringifyRecipes.includes(
              Utils.removeAccents(request.tags[j])
            )
          )
            if (
              this.recipes[i].stringifyRecipes.includes(
                Utils.removeAccents(request.tags[j])
              ) &&
              this.recipes[i].stringifyRecipes.includes(
                Utils.removeAccents(request.userInput)
              )
            ) {
              sortedRecipes.push(this.recipes[i]);
            }
        }
      } else if (request.userInput != "") {
        if (
          this.recipes[i].stringifyRecipes.includes(
            Utils.removeAccents(request.userInput)
          )
        ) {
          sortedRecipes.push(this.recipes[i]);
        }
      }
    }
    this.recipes = [...new Set(sortedRecipes)];
    console.log(this.recipes);

    return this.recipes;
  }

  // algo 1 = filter
  // search(request) {
  //   let sortedRecipes = [];
  //   console.log(this.recipes);

  //   sortedRecipes = this.recipes.filter((recipe) => {
  //     recipe.stringifyRecipes.includes(Utils.removeAccents(request.userInput));
  //   });

  //   this.recipes = [...new Set(sortedRecipes)];
  //   console.log(this.recipes);

  //   return this.recipes;
  // }
}
