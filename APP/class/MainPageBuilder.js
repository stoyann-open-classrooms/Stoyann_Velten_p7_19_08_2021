import { Utils } from "../utils/utils.js";
import { searchBarInp } from "../components/searchBar.js";
import { Cards } from "../components/Cards.js";
import { Dropdown } from "../components/dropdowns.js";

export class MainPageBuilder {
  constructor(recipesList) {
    this.sort = ["Ingredients", "Appareils", "Ustensiles"];
    this.recipesList = recipesList;
    this.tagSelecteed = [];
  }
  getUserRequest() {
    const searchBar = document.getElementById("recherche");
    return {
      userInput: searchBar.value.trim(),
      tags: this.tagSelecteed.join(),
    };
  }

  printCard(recipesList) {
    const cardsContainer = document.querySelector(".cards-container");
    const resultMsg = document.querySelector(".result-msg-container");
    const resultMsgDiv = document.querySelector(".result-msg");

    let resultMsgTxt = document.querySelector(".result-img-txt");
    let htmlContent = ``;
    if (recipesList.length > 0) {
      for (let i = 0; i < recipesList.length; i++) {
        htmlContent += new Cards(recipesList[i], i).card;
      }

      cardsContainer.innerHTML = htmlContent;

      // this.createItemListToDisplay();
    } else if (recipesList.length === 0) {
      resultMsg.style.display = "flex";
      resultMsgTxt.innerHTML = `Aucune recette ne correspond à vos critères... <br/>
       Vous pouvez chercher "tarte aux pommes", "poisson", ect.`;
      resultMsgDiv.style.backgroundColor = "#d04f4fbd";
    }
  }
  printDropdown() {
    const dropContainer = document.querySelector(".dropdowns-container");

    this.sort.forEach((el) => {
      if (el === "Ingredients") {
        dropContainer.innerHTML += new Dropdown(
          this.recipesList.getAllIngredients(),
          el
        ).dropdown;
      } else if (el === "Ustensiles") {
        dropContainer.innerHTML += new Dropdown(
          this.recipesList.getAllUstensils(),
          el
        ).dropdown;
      } else {
        dropContainer.innerHTML += new Dropdown(
          this.recipesList.getAllAppliance(),
          el
        ).dropdown;
      }
    });
    this.eventDrop();
  }
  eventDrop() {
    const btnDropIngr = document.querySelector(".btn-drop-Ingredients");
    const btnDropApp = document.querySelector(".btn-drop-Appareils");
    const btnDropUst = document.querySelector(".btn-drop-Ustensiles");
    const overlay = document.querySelector(".overlay");

    btnDropIngr.addEventListener("click", () => {
      document
        .querySelector(".dropdown-Ingredients")
        .classList.toggle("active");
      overlay.classList.toggle("overlay-active");
    });
    btnDropUst.addEventListener("click", () => {
      document.querySelector(".dropdown-Ustensiles").classList.toggle("active");
      overlay.classList.toggle("overlay-active");
    });
    btnDropApp.addEventListener("click", () => {
      document.querySelector(".dropdown-Appareils").classList.toggle("active");
      overlay.classList.toggle("overlay-active");
    });

    overlay.addEventListener("click", () => {
      document.querySelectorAll(".dropdown").forEach((el) => {
        el.classList.remove("active");
      });
      overlay.classList.remove("overlay-active");
    });
  }

  listenerItemsDrop() {
    let items = document.querySelectorAll(".items");
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("click", () => {
        this.tagSelecteed.push(items[i].innerHTML.toLowerCase());
        this.getRecipesListToDisplay();
      });
    }
  }

  listenerInput() {
    const searchBar = document.getElementById("recherche");
    searchBar.addEventListener("input", () => {
      this.getRecipesListToDisplay();
    });
  }

  getRecipesListToDisplay() {
    const request = this.getUserRequest();
    this.recipesList.search(request);
  }

  printPage() {
    this.printCard(this.recipesList.recipes);
    searchBarInp();
    this.printDropdown();
    this.listenerItemsDrop();
    this.listenerInput();
  }
}
