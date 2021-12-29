import { RECIPES } from "./data/data.js";
import { DataFetcher } from "./data/DataFetcher.js";
import { MainPageBuilder } from "./class/MainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);

const recipesList = dataFetcher.getRecipesList(dataFetcher);

// console.table(recipesList.recipes);

new MainPageBuilder(recipesList).printPage();

// // SEARCH ALGORITHM PERFORMANCE:
// measureAlgorithmPerformance();

// function measureAlgorithmPerformance() {
//   // with a request corresponding to 4 recipes:
//   const TEST_USER_REQUEST_1 = {
//     userInput: "choco",
//     tags: ["sucre", "beurre"],
//     inputIngr: "",
//     inputAppr: "",
//     inputUst: "",
//   };
//   // with a request corresponding to no recipe:
//   const TEST_USER_REQUEST_2 = {
//     userInput: "choco",
//     tags: ["mais", "basilic"],
//     inputIngr: "",
//     inputAppr: "",
//     inputUst: "",
//   };
//   const TESTS_QUANTITY = 1000;

//   const testStarting = Date.now();

//   let searchResult1, searchResult2;

//   for (let _ = 0; _ < TESTS_QUANTITY; _++) {
//     searchResult1 = recipesList.search(TEST_USER_REQUEST_1);
//     searchResult2 = recipesList.search(TEST_USER_REQUEST_2);
//   }

//   const testEnding = Date.now();

//   const testDuration = testEnding - testStarting;

//   console.log(
//     `${2 * TESTS_QUANTITY} recherches réalisées en ${testDuration} ms`
//   );
// }
