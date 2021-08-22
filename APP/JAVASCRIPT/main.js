import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList(dataFetcher);

new MainPageBuilder(recipesList).printPage(
  recipesList.getAllIngredients(recipesList),
  recipesList.getAllAppliance(recipesList),
  recipesList.getAllUstensils(recipesList)
);

let userRequest = new MainPageBuilder(recipesList).UserRequest;
console.log(userRequest);
recipesList.filterRecipes(userRequest);
