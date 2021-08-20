export class RecipesList {
  constructor(recipes) {
    this.recipes = recipes;
  }

  filterRecipes(input) {
    let filterRecipes = [];
    for (let recipe of this.recipes) {
      filterRecipes.push(recipe.name);
    }

    return filterRecipes;
  }
}
