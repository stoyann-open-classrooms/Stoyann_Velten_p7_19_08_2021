import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList(dataFetcher);
let userRequest = new MainPageBuilder(recipesList).UserRequest;
console.log(userRequest);
new MainPageBuilder(recipesList).printPage(
  recipesList.getAllIngredients(recipesList),
  recipesList.getAllAppliance(recipesList),
  recipesList.getAllUstensils(recipesList)
);

// console.log(recipesList.getAllIngredients());
console.log(
  "%crecherches realisée en...",
  "color: red; font-family:sans-serif; font-size: 20px;font-weight:bolder"
);
