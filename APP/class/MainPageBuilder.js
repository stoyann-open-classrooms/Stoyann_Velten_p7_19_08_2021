import { Utils } from "../utils/Utils.js";
import { searchBarInp } from "../components/searchBar.js";
import { Cards } from "../components/Cards.js";
import { Dropdown } from "../components/dropdowns.js";

export class MainPageBuilder {
  constructor(recipesList) {
    this.sort = ["Ingredients", "Appareils", "Ustensiles"];
    this.recipesList = recipesList;
    this.tagSelecteed = [];
  }
  // return l'objet avec la demande de l'utilisateur
  getUserRequest() {
    const searchBar = document.getElementById("recherche");
    const searchIngr = document.getElementById("input-Ingredients");
    const searchAppr = document.getElementById("input-Appareils");
    const searchUst = document.getElementById("input-Ustensiles");

    return {
      userInput: searchBar.value.trim(),
      tags: this.tagSelecteed,
      inputIngr: searchIngr.value.trim(),
      inputAppr: searchAppr.value.trim(),
      inputUst: searchUst.value.trim(),
    };
  }

  // // affiche les recettes de la liste en parametre
  printCard(recipesList) {
    const cardsContainer = document.querySelector(".cards-container");
    console.log("hello print d");
    let htmlContent = ``;

    for (let i = 0; i < recipesList.length; i++) {
      htmlContent += new Cards(recipesList[i], i).card;
    }

    if (recipesList.length === 0) {
      htmlContent = `
      <div class="message">
        <p class="message-txt">Aucune recette ne correspond à votre critère… </p>
        <p class="message-exp">vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>
        <button> <i class="fa-solid fa-x"></i></button>
      
        </div>
      `;
    }
    cardsContainer.innerHTML = htmlContent;

    this.printDropdown();
  }
  sortItem(list, input, ul) {
    let sortedList = [];

    for (let i = 0; i < list.length; i++) {
      if (
        Utils.removeAccents(list[i].innerHTML).includes(
          Utils.removeAccents(input)
        )
      ) {
        sortedList.push(list[i]);
      }
    }

    if (input.length > 0) {
      ul.innerHTML = "";
      for (let i = 0; i < sortedList.length; i++) {
        ul.append(sortedList[i]);
      }
    } else {
      ul.innerHTML = "";
      for (let i = 0; i < list.length; i++) {
        ul.append(list[i]);
      }
    }
  }

  // ouverture et fermeture des dropdowns
  eventDrop() {
    let allLiIngr = document.querySelectorAll(".items-Ingredients");
    let ulIngr = document.querySelector(".list-Ingredients");
    let allLiAppr = document.querySelectorAll(".items-Appareils");
    let ulAppr = document.querySelector(".list-Appareils");
    let allLiUst = document.querySelectorAll(".items-Ustensiles");
    let ulUst = document.querySelector(".list-Ustensiles");
    const btnDropIngr = document.querySelector(".btn-drop-Ingredients");
    const btnDropApp = document.querySelector(".btn-drop-Appareils");
    const btnDropUst = document.querySelector(".btn-drop-Ustensiles");
    const overlay = document.querySelector(".overlay");
    const searchIngr = document.getElementById("input-Ingredients");
    const searchAppr = document.getElementById("input-Appareils");
    const searchUst = document.getElementById("input-Ustensiles");

    searchIngr.addEventListener("input", (e) => {
      this.sortItem(allLiIngr, this.getUserRequest().inputIngr, ulIngr);
    });
    searchAppr.addEventListener("input", (e) => {
      this.sortItem(allLiAppr, this.getUserRequest().inputAppr, ulAppr);
    });
    searchUst.addEventListener("input", (e) => {
      this.sortItem(allLiUst, this.getUserRequest().inputUst, ulUst);
    });

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
  // creations des tags selectioner
  listenerItemsDrop() {
    let itemsIngr = document.querySelectorAll(".items-Ingredients");
    let itemsAppr = document.querySelectorAll(".items-Appareils");
    let itemsUst = document.querySelectorAll(".items-Ustensiles");
    let containerTags = document.querySelector(".container-tags");

    for (let i = 0; i < itemsIngr.length; i++) {
      itemsIngr[i].addEventListener("click", () => {
        let tag = `  <div class="tag   ingredients" id=${itemsIngr[i].id}">
        <p class="tag-txt"">${itemsIngr[i].innerHTML} </p><button class="closeBtn" id="ingredients-${i}"><i class="far fa-times-circle close-tag"></i></button>
        </div>`;
        this.getUserRequest().tags.push(
          Utils.removeAccents(itemsIngr[i].innerHTML)
        );

        containerTags.innerHTML += tag;
        this.printDropdown();

        this.printCard(this.recipesList.search(this.getUserRequest()));
      });
    }

    for (let i = 0; i < itemsAppr.length; i++) {
      itemsAppr[i].addEventListener("click", (e) => {
        this.getUserRequest().tags.push(
          Utils.removeAccents(itemsAppr[i].innerHTML)
        );
        itemsAppr[i].classList.add("active-tags");
        let tag = `  <div class="tag  appareils" id="apparreil-${i}">
        <p class="tag-txt">${itemsAppr[i].innerHTML}</p><button class="closeBtn" id="apparreil-${i}" ><i class="far fa-times-circle close-tag"></i></button>
    </div>`;
        containerTags.innerHTML += tag;

        this.printDropdown();
        this.listenerItemsDrop();
        this.printCard(this.recipesList.search(this.getUserRequest()));
      });
    }
    for (let i = 0; i < itemsUst.length; i++) {
      itemsUst[i].addEventListener("click", () => {
        this.getUserRequest().tags.push(
          Utils.removeAccents(itemsUst[i].innerHTML)
        );
        itemsUst[i].classList.add("active-tags");
        let tag = `  <div class="tag  ustensils" id="ustensils-${i}">
        <p class="tag-txt" >${itemsUst[i].innerHTML}</p><button class="closeBtn" id="ustensils-${i}"><i class="far fa-times-circle close-tag"></i></button>
    </div>`;
        containerTags.innerHTML += tag;

        // this.printDropdown();
        this.listenerItemsDrop();

        this.printCard(this.recipesList.search(this.getUserRequest()));
      });
    }
  }

  listenerDrop() {
    if (this.getUserRequest().tags.length > 0) {
      this.printCard(this.recipesList.search(this.getUserRequest()));
    } else {
      this.printCard(this.recipesList.getAllRecipes());
    }
  }

  listenerInput() {
    const searchBar = document.getElementById("recherche");
    searchBar.addEventListener("input", (e) => {
      if (searchBar.value.length >= 3) {
        console.time(`en`);
        this.printCard(this.recipesList.search(this.getUserRequest()));

        console.log(
          `%c${this.recipesList.recipes.length} recettes trouvées,`,

          "font-size:15px ; color:red"
        );
        console.timeEnd(`en`);
        console.log(
          `Avec la recherche :  "${this.getUserRequest().userInput}"`
        );
      } else if (
        searchBar.value.length < 3 &&
        this.getUserRequest().tags.length === 0
      ) {
        this.printCard(this.recipesList.getAllRecipes());
      }
    });
  }

  // fermeture des tags
  closeTags() {
    let request = this.getUserRequest().tags;
    let tags = document.querySelectorAll(".tag");

    let closeTag = document.querySelectorAll(".tag button");
    tags.forEach((tag) =>
      tag.addEventListener("click", () => {
        tag.style.display = "none";

        // request.includes(el);
        for (let i = 0; i < request.length; i++) {
          if (
            Utils.removeAccents(tag.children[0].innerText).includes(request[i])
          ) {
            request.splice(i, 1);
            console.log(this.getUserRequest().tags);
            // a voir
            this.getUserRequest().tags = request;
            if (
              this.getUserRequest().tags.length === 0 &&
              this.getUserRequest().userInput.length === 0
            ) {
              this.printCard(this.recipesList.getAllRecipes());
              console.log(this.recipesList.getAllRecipes());
            } else {
              console.log("ok");
              console.log(this.getUserRequest().tags);
              console.log(this.recipesList.search(this.getUserRequest()));
              this.printCard(this.recipesList.search(this.getUserRequest()));
            }
          }
        }
      })
    );
  }

  // affiche les dropdowns sur la page
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
    this.closeTags();
    this.listenerItemsDrop();
  }

  printPage() {
    this.printDropdown();
    this.listenerInput();
    this.listenerDrop();
    searchBarInp();
  }
}
