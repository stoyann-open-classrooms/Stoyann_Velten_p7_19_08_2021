import { RECIPES } from "./data/datas.js";

import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList();
const userInput = new MainPageBuilder(recipesList).userRequest;

new MainPageBuilder(recipesList).inputAnim();
new MainPageBuilder(recipesList).printCard();

console.log(userInput);
