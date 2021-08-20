import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList();
const userInput = new MainPageBuilder(recipesList).userRequest;

new MainPageBuilder(recipesList).printPage();

console.log(userInput);

// const dropIngrOpenIcone = document.querySelector(".open-ingredient");
// const openDropIngr = document.querySelector(".open-drop-ingredient");
// console.log(dropIngrOpenIcone);

// dropIngrOpenIcone.addEventListener("click", function (e) {
//   console.log("ok");
//   openDropIngr.style.display = "flex";
// });

function displayIngredientsList() {
  const btnIngredients = document.querySelector(".dropdown-btn-ingredients");
  const dropIngredient = document.querySelector(".open-drop-ingredient");
  const closeIngredient = document.querySelector(".close-ingredient");
  const ul = document.querySelector(".ul-ingredient");

  btnIngredients.addEventListener("click", (e) => {
    dropIngredient.style.display = "flex";
    btnIngredients.style.display = "none";
    // document.body.classList.add("antiscroll");

    closeIngredient.addEventListener("click", () => {
      dropIngredient.style.display = "none";
      btnIngredients.style.display = "flex";
    });
  });
}
displayIngredientsList();
recipesList.getAllIngredients(recipesList);
