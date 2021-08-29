import { Dropdown } from "../components/dropdowns.js";
import { Cards } from "../components/cards.js";

export class MainPageBuilder {
  constructor(recipesList) {
    this.recipesList = recipesList;
    this.requestData = {};
  }

  get UserRequest() {
    const searchBar = document.getElementById("search-bar");
    const ingrList = document.getElementById("ingredient-list").childNodes;

    let request = {
      string: "",
      filters: [],
    };

    searchBar.addEventListener("input", (e) => {
      request.string = searchBar.value;
    });
    ingrList.forEach((el) =>
      el.addEventListener("click", () => {
        request.filters.push(el.textContent);
      })
    );
    this.requestData = request;
    return this.requestData;
  }
  // animation de l'input

  inputAnim() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function (e) {
      if (e.target.value !== "") {
        e.target.parentNode.classList.add("active-input");
      } else if (e.target.value === "") {
        e.target.parentNode.classList.remove("active-input");
      }
    });
  }

  // créer et affiche les cards recettes du tableau de recette entrée en paramétre
  cardsMaker() {
    const cardsContainer = document.querySelector(".cards-container");

    let htmlContent = ``;

    for (let i = 0; i < this.recipesList.recipes.length; i++) {
      htmlContent += new Cards(this.recipesList.recipes[i], i).card;

      cardsContainer.innerHTML = htmlContent;
    }
  }

  // créer et affiche le contenue du dropdown ingrédients
  displayIngredientsDrop(AllIngredients) {
    const ul = document.getElementById("ingredient-list");
    const inp = document.querySelector(".ingr-inp");
    const icone = document.getElementById("dropdown-ingredient-icon");
    const span = document.querySelector(".ingr-span");
    const label = document.getElementById("dropdown-ingredient-label");
    const drop = document.querySelector(".dropdown-ingredients");
    new Dropdown(AllIngredients, ul, inp, icone, span, label, drop).printDrop();
  }

  displayAppareilsDrop(AllAppareils) {
    const ul = document.getElementById("appareil-list");
    const inp = document.querySelector(".app-inp");
    const icone = document.getElementById("dropdown-appareil-icon");
    const span = document.querySelector(".app-span");
    const label = document.getElementById("dropdown-appareil-label");
    const drop = document.querySelector(".dropdown-appareil");

    new Dropdown(AllAppareils, ul, inp, icone, span, label, drop).printDrop();
  }

  displayUstensilsDrop(AllUstensils) {
    const ul = document.getElementById("ustensils-list");
    const inp = document.querySelector(".ust-inp");
    const icone = document.getElementById("dropdown-ustensils-icon");
    const span = document.querySelector(".ust-span");
    const label = document.getElementById("dropdown-ustensils-label");
    const drop = document.querySelector(".dropdown-ustensils");

    new Dropdown(AllUstensils, ul, inp, icone, span, label, drop).printDrop();
  }
  //  créer et affiche un tag si un item de la liste ingredients est sélèctioner
  makeTags() {
    let item = document.querySelectorAll(".item");
    const tagsContainer = document.querySelector(".tags-container");

    item.forEach((el) =>
      el.addEventListener("click", () => {
        tagsContainer.innerHTML += `
        <div class="tag ingredients" >${el.textContent}<i class="far fa-times-circle close-tag"></i></div>
        `;
      })
    );
    // console.log(tagSelected);
  }

  //  affiche la page
  printPage(allIngredients, AllAppareils, AllUstensils) {
    this.cardsMaker(this.recipesList);
    this.inputAnim();
    this.displayIngredientsDrop(allIngredients);
    this.displayAppareilsDrop(AllAppareils);
    this.displayUstensilsDrop(AllUstensils);
    this.makeTags();
  }
}
