import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";
import { Utils } from "./utils/utils.js";

const dataFetcher = new DataFetcher(RECIPES);

const recipesList = dataFetcher.getRecipesList(dataFetcher);

new MainPageBuilder(recipesList).printPage();

// let userRequest = new MainPageBuilder(recipesList).UserRequest;

// const searchBar = document.getElementById("search-bar");
// searchBar.addEventListener("input", (e) => {
//   if (searchBar.value.length >= 3) {
//     console.log(recipesList.filterRecipe(userRequest));
//     console.log();
//     console.log(
//       `%c${
//         recipesList.filterRecipe(userRequest).length
//       } recette(s)  trouvé correspondant a vos critéres`,
//       "color: red; font-family:sans-serif; font-size: 15px;font-weight:bolder"
//     );
//   }
// });
