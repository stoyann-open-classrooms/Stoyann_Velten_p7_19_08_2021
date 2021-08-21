import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList();
const userInput = new MainPageBuilder(recipesList).userRequest;

new MainPageBuilder(recipesList).printPage(
  recipesList.getAllIngredients(recipesList),
  recipesList.getAllAppliance(recipesList),
  recipesList.getAllUstensils(recipesList)
);

// let ingrItems = document.querySelectorAll(".ingr-item");
// let tagSelected = [];
// ingrItems.forEach((el) =>
//   el.addEventListener("click", () => {
//     tagSelected.push(el.textContent);
//     console.log(tagSelected);
//   })
// );

// log le nom de la recette 14 sans accents
console.log(recipesList.recipes[14].nameNoAccent);
// log les ingrédients de la recette 14 sans accents
console.log(recipesList.recipes[14].ingredientsNoAccent);
// log l'appliances de la recette 14 sans accents
console.log(recipesList.recipes[14].applianceNoAccent);
