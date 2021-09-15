import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";
import { Utils } from "./utils/utils.js";

const dataFetcher = new DataFetcher(RECIPES);

const recipesList = dataFetcher.getRecipesList(dataFetcher);
new MainPageBuilder(recipesList).printPage();

// Utils.userRequest();
// recipesList.recipes.forEach((element) => {
//   element.stringifyRecipes;
// });
