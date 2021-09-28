// import { Dropdown } from "../components/dropdowns.js";
import { Cards } from "../components/cards.js";
import { Dropdown } from "../components/dropdowns.js";
import { Utils } from "../utils/utils.js";

export class MainPageBuilder {
  constructor(recipesList) {
    this.recipesList = recipesList;
    this.tagSelecteed = [];
    this.userRequest = {
      searchBarValue: "",
      tagSelecteed: [],
    };
  }
  getuserRequest() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", () => {
      this.userRequest.searchBarValue = Utils.removeAccents(searchBar.value);
      console.log(this.userRequest);
      return this.userRequest;
    });
  }

  displayIngrDrop(itemList) {
    const btn = document.querySelector(".btn-drop-ingr");
    const dropdown = document.querySelector(".dropdown.ingr");
    const icone = document.querySelector(".icone-ingr");
    const ul = document.querySelector(".list-ingr");
    const dropIngr = new Dropdown(btn, dropdown, icone, ul, itemList);
  }

  displayAppDrop(itemList) {
    const btn = document.querySelector(".btn-drop-app");
    const dropdown = document.querySelector(".dropdown.app");
    const icone = document.querySelector(".icone-app");
    const ul = document.querySelector(".list-app");
    this.dropIngr = new Dropdown(btn, dropdown, icone, ul, itemList);
  }

  displayUstDrop(itemList) {
    const btn = document.querySelector(".btn-drop-ust");
    const dropdown = document.querySelector(".dropdown.ust");
    const icone = document.querySelector(".icone-ust");
    const ul = document.querySelector(".list-ust");
    const dropIngr = new Dropdown(btn, dropdown, icone, ul, itemList);

    this.recipesList.createListToDisplay();
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

      // this.createItemListToDisplay();
    } else if (recipesList.length === 0) {
      resultMsg.style.display = "flex";
      resultMsgTxt.innerHTML = `Aucune recette ne correspond à vos critères... <br/>
       Vous pouvez chercher "tarte aux pommes", "poisson", ect.`;
      resultMsgDiv.style.backgroundColor = "#d04f4fbd";
    }
    // console.log(this.recipesList.getAllIngredients());
  }

  inputFilterRecipes() {
    const searchBarInput = document.getElementById("search-bar");

    searchBarInput.addEventListener("input", (e) => {
      if (this.userRequest.searchBarValue.length >= 3) {
        this.printCard(this.recipesList.filterRecipe(this.userRequest));
      } else {
        document.querySelector(".result-msg-container").style.display = "none";
      }
    });
  }

  createTags() {
    let appItems = document.querySelectorAll(".list-app > li");
    let ingrItems = document.querySelectorAll(".list-ingr > li");
    let ustItems = document.querySelectorAll(".list-ust > li");

    const containerTags = document.querySelector(".tags-container");

    appItems.forEach((el) =>
      el.addEventListener("click", () => {
        let tag = `<div class="tag appareils"> <p class="tag-txt">${el.textContent}</p><i class="far fa-times-circle close-tag"></i></div>`;
        containerTags.innerHTML += tag;
        this.userRequest.tagSelecteed.push(Utils.removeAccents(el.textContent));

        this.filterTags();
      })
    );

    ingrItems.forEach((el) =>
      el.addEventListener("click", () => {
        let tag = `  <div class="tag ingredients"> <p class="tag-txt">${el.textContent}</p><i class="far fa-times-circle close-tag"></i></div>`;
        containerTags.innerHTML += tag;
        this.userRequest.tagSelecteed.push(Utils.removeAccents(el.textContent));

        this.filterTags();
      })
    );
    ustItems.forEach((el) =>
      el.addEventListener("click", () => {
        let tag = `  <div class="tag ustensiles"> <p class="tag-txt">${el.textContent}</p><i class="far fa-times-circle close-tag"></i></div>`;
        containerTags.innerHTML += tag;
        this.userRequest.tagSelecteed.push(Utils.removeAccents(el.textContent));

        this.filterTags();
      })
    );
  }

  filterTags() {
    console.log(this.userRequest);
    if (this.userRequest.tagSelecteed.length > 0) {
      this.printCard(this.recipesList.filterRecipe(this.userRequest));
    }

    this.createTags();
  }

  //  affiche la page
  printPage() {
    this.printCard(this.recipesList.recipes);
    this.filterTags();
    this.inputFilterRecipes();

    this.displayIngrDrop();
    this.displayAppDrop();
    this.displayUstDrop();

    this.getuserRequest();
    this.createTags();
  }
}
