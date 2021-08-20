import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList();
const userInput = new MainPageBuilder(recipesList).userRequest;

new MainPageBuilder(recipesList).printPage();

console.log(userInput);

console.log(recipesList.getAllIngredients(recipesList));
console.log(recipesList.getAllUstensils(recipesList));
console.log(recipesList.getAllAppliance(recipesList));
