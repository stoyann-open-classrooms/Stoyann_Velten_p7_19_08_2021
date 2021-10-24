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

    let htmlContent = ``;
    if (recipesList.length > 0) {
      for (let i = 0; i < recipesList.length; i++) {
        htmlContent += new Cards(recipesList[i], i).card;
      }
    } else {
      htmlContent = `   
      <div class="message">
        <p class="message-txt">Aucune recette ne correpond à votre critère...</p>
        <p class="message-exp">Vous pouvez chercher " tartes aux pommes ", " poisson ", ect.</p>
      <button><i class="far fa-times-circle close-tag"></i></button>
      </div>`;
    }
    cardsContainer.innerHTML = htmlContent;
  }
  printDropdown() {
    const dropContainer = document.querySelector(".dropdowns-container");
    dropContainer.innerHTML = "";
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
    let itemsIngr = document.querySelectorAll(".items-Ingredients");
    let itemsAppr = document.querySelectorAll(".items-Appareils");
    let itemsUst = document.querySelectorAll(".items-Ustensiles");
    let containerTags = document.querySelector(".container-tags");

    for (let i = 0; i < itemsIngr.length; i++) {
      itemsIngr[i].addEventListener("click", () => {
        this.tagSelecteed.push(itemsIngr[i].innerHTML.toLowerCase());
        itemsIngr[i].classList.add("active-tags");
        let tag = `  <div class="tag  ingredients">
        <p class="tag-txt">${itemsIngr[i].innerHTML}</p><button><i class="far fa-times-circle close-tag"></i></button>
    </div>`;
        containerTags.innerHTML += tag;
        this.printCard(this.recipesList.searchByTags(this.getUserRequest()));
        this.printDropdown();
      });
    }

    for (let i = 0; i < itemsAppr.length; i++) {
      itemsAppr[i].addEventListener("click", () => {
        this.tagSelecteed.push(itemsAppr[i].innerHTML.toLowerCase());
        itemsAppr[i].classList.add("active-tags");
        let tag = `  <div class="tag  appareils">
        <p class="tag-txt">${itemsAppr[i].innerHTML}</p><button><i class="far fa-times-circle close-tag"></i></button>
    </div>`;
        containerTags.innerHTML += tag;
        this.printCard(this.recipesList.searchByTags(this.getUserRequest()));
        this.printDropdown();
      });
    }
    for (let i = 0; i < itemsUst.length; i++) {
      itemsUst[i].addEventListener("click", () => {
        this.tagSelecteed.push(itemsUst[i].innerHTML.toLowerCase());
        itemsUst[i].classList.add("active-tags");
        let tag = `  <div class="tag  ustensils">
        <p class="tag-txt">${itemsUst[i].innerHTML}</p><button><i class="far fa-times-circle close-tag"></i></button>
    </div>`;
        containerTags.innerHTML += tag;
        this.printCard(this.recipesList.searchByTags(this.getUserRequest()));
        this.printDropdown();
      });
    }
  }

  listenerInput() {
    const searchBar = document.getElementById("recherche");
    searchBar.addEventListener("input", () => {
      if (this.getUserRequest().userInput.length > 2) {
        this.getRecipesListToDisplay();
      }
    });
  }

  getRecipesListToDisplay() {
    const request = this.getUserRequest();

    this.recipesList.search(request);
    // this.recipesList.searchByTags(request);

    this.printCard(this.recipesList.search(this.getUserRequest()));
    this.printDropdown();
    this.listenerItemsDrop();
  }

  printPage() {
    this.printCard(this.recipesList.recipes);
    searchBarInp();
    this.printDropdown();
    this.listenerItemsDrop();
    this.listenerInput();
  }
}
