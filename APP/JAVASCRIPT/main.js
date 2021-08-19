import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList();

new MainPageBuilder(recipesList);
new MainPageBuilder(recipesList).userRequest;

new MainPageBuilder(recipesList).inputAnim();
