import { RECIPES } from "./data/data.js";
import { DataFetcher } from "./data/DataFetcher.js";
import { MainPageBuilder } from "./class/MainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);

const recipesList = dataFetcher.getRecipesList(dataFetcher);

new MainPageBuilder(recipesList).printPage();
