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
  getAllIngredients(recipesList) {
    const ul = document.querySelector(".ul-ingredient");
    let AllIngredients = [];
    let localList = [];

    // ul.innerHTML = "";

    for (let i = 0; i < recipesList.length; i++) {
      localList = recipesList[i].ingredients;

      localList.forEach((element) => {
        AllIngredients.push(element.ingredient);
      });
    }
    AllIngredients = new Set(AllIngredients);
    AllIngredients.forEach((el) => {
      const li = document.createElement("li");
      li.classList.add("ingredient-item");
      li.textContent = el;
      ul.append(li);
    });
    return AllIngredients;
  }
}
