import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList(dataFetcher);
let userRequest = new MainPageBuilder(recipesList).UserRequest;
console.log(userRequest);

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", (e) => {
  if (searchBar.value.length >= 3) {
    console.log(recipesList.filterRecipe(userRequest));
    console.log();
    console.log(
      `%c${
        recipesList.filterRecipe(userRequest).length
      } recette(s)  trouvé correspondant a vos critéres`,
      "color: red; font-family:sans-serif; font-size: 15px;font-weight:bolder"
    );
  }
});

new MainPageBuilder(recipesList).printPage(
  recipesList.getAllIngredients(recipesList),
  recipesList.getAllAppliance(recipesList),
  recipesList.getAllUstensils(recipesList)
);
