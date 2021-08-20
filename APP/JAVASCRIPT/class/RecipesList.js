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

  getAllUstensils() {
    let AllUstensils = [];
    this.recipes.forEach((recipe) => {
      for (let ustensil of recipe.ustensils) {
        AllUstensils.push(ustensil);
      }
    });
    return new Set(AllUstensils);
  }
  getAllAppliance() {
    let AllAppliance = [];
    this.recipes.forEach((recipe) => {
      AllAppliance.push(recipe.appliance);
    });
    return new Set(AllAppliance);
  }
}
