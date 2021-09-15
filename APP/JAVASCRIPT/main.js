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
// Animation des cards au scrool
// function openDrop() {
//     console.log(this.btn);
//     this.btn.innerHTML = `<i class="icone fas fa-chevron-down"></i>`;
//     this.btn.addEventListener("click", () => {
//       this.dropdown.classList.toggle("active");
//       this.btn.innerHTML = `<i class="icone fas fa-chevron-up"></i>`;
//     });
//   }
const btnsDrop = document.querySelectorAll(".btn-drop");
console.log(btnsDrop);

btnsDrop.forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelector(".dropdown-app").classList.toggle("active");
  })
);
