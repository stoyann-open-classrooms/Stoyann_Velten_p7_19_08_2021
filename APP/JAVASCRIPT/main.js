import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList(dataFetcher);

// makeTags() {

//   const tagsContainer = document.querySelector(".tags-container");
//   let tagSelected = [];
//   item.forEach((el) =>
//     el.addEventListener("click", () => {
//       console.log(el.textContent);
//       tagsContainer.innerHTML += `
//       <div class="tag">${el.textContent}<i class="far fa-times-circle close-tag"></i></div>
//       `;
//       tagSelected.push(el.textContent);
//       tagSelected = new Set(tagSelected);
//     })
//   );
//   console.log(tagSelected);
// }
function getUserRequest() {
  const searchBar = document.getElementById("search-bar");

  let request = {
    string: "",
    filters: [],
  };

  searchBar.addEventListener("input", (e) => {
    request.string = searchBar.value;
    const filteredRecipes = recipesList.filterRecipes(request);
  });

  return request;
}
console.log(getUserRequest());
new MainPageBuilder(recipesList).printPage(
  recipesList.getAllIngredients(recipesList),
  recipesList.getAllAppliance(recipesList),
  recipesList.getAllUstensils(recipesList)
);
