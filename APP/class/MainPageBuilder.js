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
    return {
      userInput: searchBar.value.trim(),
      // tags: this.tagSelecteed,
      tags: this.tagSelecteed.join(" ").trim(),
    };
  }

  // // affiche les recettes de la liste en parametre
  printCard(recipesList) {
    const cardsContainer = document.querySelector(".cards-container");

    let htmlContent = ``;

    for (let i = 0; i < recipesList.length; i++) {
      htmlContent += new Cards(recipesList[i], i).card;
    }

    if (recipesList.length === 0) {
      htmlContent = `<div class="message">
      <p class="message-txt">Aucune recette ne correspond à votre critère… </p>
      <p class="message-exp">vous pouvez
      chercher « tarte aux pommes », « poisson », etc.</p>
      
    <button id ="close-msg"> <i class="far fa-window-close"></i></button>

      </div>`;
    }
    cardsContainer.innerHTML = htmlContent;
  }

  // ouverture et fermeture des dropdowns
  eventDrop() {
    const btnDropIngr = document.querySelector(".btn-drop-Ingredients");
    const btnDropApp = document.querySelector(".btn-drop-Appareils");
    const btnDropUst = document.querySelector(".btn-drop-Ustensiles");
    const overlay = document.querySelector(".overlay");
    const inpUst = document.getElementById("input-Ustensiles");
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
        this.tagSelecteed.push(Utils.removeAccents(itemsIngr[i].innerHTML));

        itemsIngr[i].classList.add("active-tags");
        let tag = `  <div class="tag   ingredients" id=${itemsIngr[i].id}">
        <p class="tag-txt"">${itemsIngr[i].innerHTML} </p><button class="closeBtn" id="ingredients-${i}"><i class="far fa-times-circle close-tag"></i></button>
        </div>`;
        containerTags.innerHTML += tag;
        this.printDropdown();
        this.listenerItemsDrop();
        this.printCard(this.recipesList.search(this.getUserRequest()));
      });
    }

    for (let i = 0; i < itemsAppr.length; i++) {
      itemsAppr[i].addEventListener("click", () => {
        this.tagSelecteed.push(Utils.removeAccents(itemsAppr[i].innerHTML));
        itemsAppr[i].classList.add("active-tags");
        let tag = `  <div class="tag  appareils" id="apparreil-${i}">
        <p class="tag-txt">${itemsAppr[i].innerHTML}</p><button class="closeBtn" id="apparreil-${i}" ><i class="far fa-times-circle close-tag"></i></button>
    </div>`;
        containerTags.innerHTML += tag;
        this.printCard(this.recipesList.search(this.getUserRequest()));
        this.printDropdown();
        this.listenerItemsDrop();
      });
    }
    for (let i = 0; i < itemsUst.length; i++) {
      itemsUst[i].addEventListener("click", () => {
        this.tagSelecteed.push(Utils.removeAccents(itemsUst[i].innerHTML));
        itemsUst[i].classList.add("active-tags");
        let tag = `  <div class="tag  ustensils" id="ustensils-${i}">
        <p class="tag-txt" >${itemsUst[i].innerHTML}</p><button class="closeBtn" id="ustensils-${i}"><i class="far fa-times-circle close-tag"></i></button>
    </div>`;
        containerTags.innerHTML += tag;
        this.printCard(this.recipesList.search(this.getUserRequest()));
        this.printDropdown();
        this.listenerItemsDrop();
      });
    }
  }

  listenerInput() {
    const searchBar = document.getElementById("recherche");
    let request = this.getUserRequest();

    console.log(request);
    searchBar.addEventListener("input", (e) => {
      console.log(this.getUserRequest());

      this.printCard(this.recipesList.search(this.getUserRequest()));
      this.printDropdown();
      this.listenerItemsDrop();

      //  return this.recipesList;
    });
  }

  // fermeture des tags
  closeTags() {
    let request = this.getUserRequest().tags;
    let tags = document.querySelectorAll(".tag");

    let closeTag = document.querySelectorAll(".tag button");
    tags.forEach((el) =>
      el.addEventListener("click", () => {
        console.log(Utils.removeAccents(el.children[0].innerHTML));

        el.style.display = "none";
        console.log(request.includes(el.children[0].innerText));

        console.log(request);
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
        console.log(this.recipesList.getAllAppliance());
      } else {
        dropContainer.innerHTML += new Dropdown(
          this.recipesList.getAllAppliance(),
          el
        ).dropdown;
      }
    });
    this.eventDrop();
    this.sortAppliances(this.recipesList.getAllAppliance());
    // this.appInp(this.recipesList.getAllAppliance());
    this.closeTags();
    // this.ingrInp();
  }

  sortAppliances(list) {
    let inpVal = document.getElementById("input-Appareils");

    inpVal.addEventListener("input", (e) => {
      if (inpVal.value.length > 0) {
        console.log(this.recipesList.getAllAppliance());
        let result = list.filter((item) =>
          Utils.removeAccents(item).includes(Utils.removeAccents(inpVal.value))
        );
        // console.log(this.recipesList.getAllAppliance());
        console.log(result);
      }
    });
  }

  ustInp() {
    let inpVal = document.getElementById("input-Ustensiles");

    inpVal.addEventListener("input", (e) => {
      // console.log(inpVal.value);
      // if (inpVal.value.length > 0) {
      //   console.log(this.recipesList.getAllUstensils());
      //   const result = this.recipesList
      //     .getAllUstensils()
      //     .filter((item) =>
      //       Utils.removeAccents(item).includes(
      //         Utils.removeAccents(inpVal.value)
      //       )
      //     );
      //   console.log(result);
      //   return result;
      // } else {
      // }
      return inpVal.value;
    });
  }

  printPage() {
    this.printCard(this.recipesList.recipes);
    this.listenerInput();
    this.printDropdown();
    this.listenerItemsDrop();
    searchBarInp();
  }
}
