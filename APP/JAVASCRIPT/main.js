import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { RecipesList } from "./class/RecipesList.js";
import { inputAnim } from "./animations/inputAnim.js";

inputAnim();

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList();

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", (e) => {
  console.log(searchBar.value.split(" "));
});

console.log(recipesList);
