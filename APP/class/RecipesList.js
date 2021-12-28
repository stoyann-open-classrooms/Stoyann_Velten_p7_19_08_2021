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

  search(request) {
    let sortedRecipes = [];

    for (let i = 0; i < this.recipes.length; i++) {
      if (request.tags.length > 0) {
        let tagOk = 0;

        for (let tag in request.tags) {
          if (
            this.recipes[i].stringifyRecipes.includes(
              Utils.removeAccents(request.tags[tag])
            ) ||
            (this.recipes[i].stringifyRecipes.includes(
              Utils.removeAccents(request.tags[tag])
            ) &&
              this.recipes[i].stringifyRecipes.includes(
                Utils.removeAccents(request.userInput)
              ))
          ) {
            tagOk++;

            if (request.tags.length === tagOk) {
              sortedRecipes.push(this.recipes[i]);
            }
          }
        }
      }
      if (request.userInput != "") {
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

    return this.recipes;
  }

  // search(request) {
  //   let sortedRecipes = [];

  //   for (let i = 0; i < this.recipes.length; i++) {
  //     if (request.tags.length > 0) {
  //       let tagOk = 0;

  //       // verrifier si tous les tags sont dans les recette avant de

  //       for (let tag in request.tags) {
  //         if (
  //           this.recipes[i].stringifyRecipes.includes(
  //             Utils.removeAccents(request.tags[tag])
  //           ) ||
  //           (this.recipes[i].stringifyRecipes.includes(
  //             Utils.removeAccents(request.tags[tag])
  //           ) &&
  //             this.recipes[i].stringifyRecipes.includes(
  //               Utils.removeAccents(request.userInput)
  //             ))
  //         ) {
  //           tagOk++;

  //           if (request.tags.length === tagOk) {
  //             sortedRecipes.push(this.recipes[i]);
  //           }
  //         }
  //       }
  //     } else if (request.userInput != "") {
  //       if (
  //         this.recipes[i].stringifyRecipes.includes(
  //           Utils.removeAccents(request.userInput)
  //         )
  //       ) {
  //         sortedRecipes.push(this.recipes[i]);
  //       }
  //     }
  //   }
  //   this.recipes = [...new Set(sortedRecipes)];

  //   return this.recipes;
  // }
}
