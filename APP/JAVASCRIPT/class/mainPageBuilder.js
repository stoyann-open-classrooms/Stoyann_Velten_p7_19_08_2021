// import { Dropdown } from "../components/dropdowns.js";
import { Cards } from "../components/cards.js";
import { Dropdown } from "../components/dropdowns.js";
import { Utils } from "../utils/utils.js";

export class MainPageBuilder {
  constructor(recipesList) {
    this.recipesList = recipesList;
  }
  displayIngrDrop(itemList) {
    const btn = document.querySelector(".btn-drop-ingr");
    const dropdown = document.querySelector(".dropdown.ingr");
    const icone = document.querySelector(".icone-ingr");
    const ul = document.querySelector(".list-ingr");
    const dropIngr = new Dropdown(
      btn,
      dropdown,
      icone,
      ul,
      itemList
    ).printDrop();
    let ingrItems = document.querySelectorAll(".list-ingr > li");
    ingrItems.forEach((item) => item.classList.add("item-ingr"));
  }

  displayAppDrop(itemList) {
    const btn = document.querySelector(".btn-drop-app");
    const dropdown = document.querySelector(".dropdown.app");
    const icone = document.querySelector(".icone-app");
    const ul = document.querySelector(".list-app");
    const dropIngr = new Dropdown(
      btn,
      dropdown,
      icone,
      ul,
      itemList
    ).printDrop();
    let appItems = document.querySelectorAll(".list-app > li");
    appItems.forEach((item) => item.classList.add("item-app"));
  }

  displayUstDrop(itemList) {
    const btn = document.querySelector(".btn-drop-ust");
    const dropdown = document.querySelector(".dropdown.ust");
    const icone = document.querySelector(".icone-ust");
    const ul = document.querySelector(".list-ust");
    const dropIngr = new Dropdown(
      btn,
      dropdown,
      icone,
      ul,
      itemList
    ).printDrop();
    let ustItems = document.querySelectorAll(".list-ust > li");
    ustItems.forEach((item) => item.classList.add("item-ust"));
  }
  printCard(recipesList) {
    const cardsContainer = document.querySelector(".card-container");
    const resultMsg = document.querySelector(".result-msg-container");
    const resultMsgDiv = document.querySelector(".result-msg");
    let resultMsgTxt = document.querySelector(".result-img-txt");
    let htmlContent = ``;

    if (recipesList.length > 0) {
      for (let i = 0; i < recipesList.length; i++) {
        htmlContent += new Cards(recipesList[i], i).card;
      }
      cardsContainer.innerHTML = htmlContent;
      resultMsgTxt.innerHTML = `${recipesList.length} recette(s)  trouvé correspondant a vos critéres`;
      resultMsgDiv.style.backgroundColor = "#68d9a4";
    } else if (recipesList.length === 0) {
      resultMsg.style.display = "flex";
      resultMsgTxt.innerHTML = `Aucune recette ne correspond à vos critères... <br/>
       Vous pouvez chercher "tarte aux pommes", "poisson", ect.`;
      resultMsgDiv.style.backgroundColor = "#d04f4fbd";
    }
  }

  getRequest() {
    const searchBarInput = document.getElementById("search-bar");
    let request = "";
    searchBarInput.addEventListener("input", (e) => {
      request = searchBarInput.value.toLowerCase();
      this.printCard(this.recipesList.filterRecipe(request));
      console.log(request);
    });
  }
  createTags() {
    let appItems = document.querySelectorAll(".list-app > li");
    let ingrItems = document.querySelectorAll(".list-ingr > li");
    let ustItems = document.querySelectorAll(".list-ust > li");

    const containerTags = document.querySelector(".tags-container");

    appItems.forEach((el) =>
      el.addEventListener("click", () => {
        console.log(el);
        let tag = `  <div class="tag appareils">${el.textContent}<i class="far fa-times-circle close-tag"></i></div>`;
        containerTags.innerHTML += tag;
      })
    );

    ingrItems.forEach((el) =>
      el.addEventListener("click", () => {
        console.log(el);
        let tag = `  <div class="tag ingredients">${el.textContent}<i class="far fa-times-circle close-tag"></i></div>`;
        containerTags.innerHTML += tag;
      })
    );
    ustItems.forEach((el) =>
      el.addEventListener("click", () => {
        console.log(el);
        let tag = `  <div class="tag ustensiles">${el.textContent}<i class="far fa-times-circle close-tag"></i></div>`;
        containerTags.innerHTML += tag;
      })
    );
  }
  //  affiche la page
  printPage() {
    this.printCard(this.recipesList.recipes);
    this.getRequest();
    this.displayIngrDrop(this.recipesList.getAllIngredients());
    this.displayAppDrop(this.recipesList.getAllAppliance());
    this.displayUstDrop(this.recipesList.getAllUstensils());
    this.createTags();
  }
}
