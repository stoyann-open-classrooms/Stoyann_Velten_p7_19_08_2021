import { RECIPES } from "./data/data.js";
import { DataFetcher } from "./data/DataFetcher.js";
import { MainPageBuilder } from "./class/MainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);

const recipesList = dataFetcher.getRecipesList(dataFetcher);

// console.table(recipesList.recipes);

new MainPageBuilder(recipesList).printPage();
