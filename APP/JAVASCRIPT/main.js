import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList();

new MainPageBuilder(recipesList).printPage(
  recipesList.getAllIngredients(recipesList),
  recipesList.getAllAppliance(recipesList),
  recipesList.getAllUstensils(recipesList)
);

// log le nom de la recette 14 sans accents
console.log(recipesList.recipes[14].nameNoAccent);
// log les ingrédients de la recette 14 sans accents
console.log(recipesList.recipes[14].ingredientsNoAccent);
// log l'appliances de la recette 14 sans accents
console.log(recipesList.recipes[14].applianceNoAccent);

recipesList.filterRecipes(getRequest());

// console.log(this.recipes);
function getRequest() {
  let userInp = [];
  const searchBarInput = document.getElementById("search-bar");
  searchBarInput.addEventListener("input", function () {
    userInp.push(searchBarInput.value.toLowerCase().split(" "));
  });
  return userInp;
}
