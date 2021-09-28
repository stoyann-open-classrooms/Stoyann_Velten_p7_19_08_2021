import { RECIPES } from "./data/datas.js";
import { DataFetcher } from "./class/DataFetcher.js";
import { MainPageBuilder } from "./class/mainPageBuilder.js";
import { Utils } from "./utils/utils.js";

const dataFetcher = new DataFetcher(RECIPES);

const recipesList = dataFetcher.getRecipesList(dataFetcher);
new MainPageBuilder(recipesList).printPage();

const btnIngr = document.querySelector(".btn-drop-ingr");

btnIngr.addEventListener("click", () => {
  document.querySelector(".dropdown-ingr").classList.toggle("active");
});

const btnApp = document.querySelector(".btn-drop-app");

btnApp.addEventListener("click", () => {
  document.querySelector(".dropdown-app").classList.toggle("active");
});

const btnUst = document.querySelector(".btn-drop-ust");
const closeInfo = document.querySelector(".fa-times-circle");
const containerInfo = document.querySelector(".result-msg-container");

btnUst.addEventListener("click", () => {
  document.querySelector(".dropdown-ust").classList.toggle("active");
});

closeInfo.addEventListener("click", () => {
  containerInfo.style.display = "none";
});
