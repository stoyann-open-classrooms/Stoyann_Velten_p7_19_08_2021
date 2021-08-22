import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList(dataFetcher);
let userRequest = recipesList.userRequest;
new MainPageBuilder(recipesList).printPage(
  recipesList.getAllIngredients(recipesList),
  recipesList.getAllAppliance(recipesList),
  recipesList.getAllUstensils(recipesList)
);

// // log le nom de la recette 14 sans accents
// console.log(recipesList.recipes[14].nameNoAccent);
// // log les ingrédients de la recette 14 sans accents
// console.log(recipesList.recipes[14].ingredientsNoAccent);
// // log l'appliances de la recette 14 sans accents
// console.log(recipesList.recipes[14].applianceNoAccent);

recipesList.filterRecipes();

// console.log(this.recipes);
// console.log(request);

console.log(userRequest);
recipesList.callback((mavar) => {
  //   console.log(mavar);
});
// const searchBarInput = document.getElementById("search-bar");

// searchBarInput.addEventListener("input", (e) => {
//   if (searchBarInput.length > 2) {
//     // filters.value = searchBarInput.value;
//     console.log(searhBarInput.value);
//     console.log({ userInput: this.value.splice(" ") });
//     if ((searchBarInput.keyCode = "entrée")) {
//       // filters.selectTag.push(searchBarInput.value);
//       searchBarInput.value = "";
//     }
//   }
//   // return filters;
// });
