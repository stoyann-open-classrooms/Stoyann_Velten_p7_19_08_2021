import { Utils } from "../utils/Utils.js";
export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
    this.Allrecipes = recipes;
  }
  // appInp() {
  //   let inpVal = document.getElementById("input-Appareils");

  //   inpVal.addEventListener("input", (e) => {
  //     if (inpVal.value.length > 0) {
  //       let tab = this.recipesList.getAllAppliance();
  //       console.log("il faut trier les appareils maitenant !");
  //       console.log(this.recipesList.getAllAppliance());
  //       let result = this.recipesList
  //         .getAllAppliance()
  //         .filter((item) =>
  //           Utils.removeAccents(item).includes(
  //             Utils.removeAccents(inpVal.value)
  //           )
  //         );
  //       console.log(tab);

  //       console.log(result);
  //       return result;
  //     }
  //   });
  // }
  getAllIngredients() {
    const AllIngredients = new Set();

    for (let recipe of this.recipes) {
      for (let i = 0; i < recipe.ingredients.length; i++) {
        AllIngredients.add(recipe.ingredients[i].ingredient);
      }
    }

    return [...AllIngredients];
  }

  getAllAppliance() {
    const appliances = new Set();

    for (let recipe of this.recipes) {
      appliances.add(recipe.appliance);
    }

    return [...appliances];
  }

  getAllUstensils() {
    const AllUstensils = new Set();

    for (let recipe of this.recipes) {
      for (let i = 0; i < recipe.ustensils.length; i++) {
        AllUstensils.add(recipe.ustensils[i]);
      }
    }
    return [...AllUstensils];
  }

  search(request) {
    console.log(request);
    let sortedRecipes = [];

    if (request.userInput.length >= 2) {
      for (let i = 0; i < this.recipes.length; i++) {
        // console.log(this.recipes[i]);

        if (
          this.recipes[i].stringifyRecipes.includes(
            Utils.removeAccents(request.userInput)
          )
        ) {
          if (
            this.recipes[i].stringifyRecipes.includes(
              Utils.removeAccents(request.tags)
            )
          )
            sortedRecipes.push(this.recipes[i]);
        }
      }
      // callback();

      this.getAllAppliance();
      this.getAllIngredients();
      this.getAllUstensils();

      this.recipes = sortedRecipes;

      return this.recipes;
    } else if (request.userInput === "" && request.tags === "") {
      this.recipes = this.Allrecipes;
      return this.recipes;
    }
  }
}
