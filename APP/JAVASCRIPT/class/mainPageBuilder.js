import { removeAccents } from "../utils/string.js";
import { Dropdown } from "../components/dropdowns.js";
import { Cards } from "../components/cards.js";

export class MainPageBuilder {
  constructor(recipesList) {
    this.recipesList = recipesList;
    this.requestData = {};
  }

  UserRequest() {
    const searchBar = document.getElementById("search-bar");
    const ingrList = document.getElementById("ingredient-list").childNodes;

    let request = {
      string: "",
      filters: [],
    };

    searchBar.addEventListener("input", (e) => {
      request.string = searchBar.value;
      // console.log(request.string);
    });
    ingrList.forEach((el) =>
      el.addEventListener("click", () => {
        request.filters.push(el.textContent);
      })
    );
    this.requestData = request;

    return this.requestData;
  }

  getSortedRecipesList(request) {
    console.log(this.requestData.string);
    let sortRecipe = this.recipesList.recipes.filter((recipe) =>
      recipe.name.includes(this.requestData.string)
    );
    console.log(sortRecipe);
    return sortRecipe;
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

  printCard(recipesList) {
    const cardsContainer = document.querySelector(".cards-container");

    let htmlContent = ``;

    for (let i = 0; i < recipesList.length; i++) {
      htmlContent += new Cards(recipesList[i], i).card;
    }
    cardsContainer.innerHTML = htmlContent;
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
    const ingrList = document.getElementById("ingredient-list").childNodes;
    const appList = document.getElementById("appareil-list").childNodes;
    const ustList = document.getElementById("ustensils-list").childNodes;

    console.log(ingrList);
    const tagsContainer = document.querySelector(".tags-container");

    ingrList.forEach((el) =>
      el.addEventListener("click", () => {
        tagsContainer.innerHTML += `
        <div class="tag ingredients" >${el.textContent}<i class="far fa-times-circle close-tag"></i></div>
        `;
      })
    );
    appList.forEach((el) =>
      el.addEventListener("click", () => {
        tagsContainer.innerHTML += `
      <div class="tag appareils" >${el.textContent}<i class="far fa-times-circle close-tag"></i></div>
      `;
      })
    );

    ustList.forEach((el) =>
      el.addEventListener("click", () => {
        tagsContainer.innerHTML += `
    <div class="tag ustensils" >${el.textContent}<i class="far fa-times-circle close-tag"></i></div>
    `;
      })
    );
  }
  searchBarRs() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", (e) => {
      let SortedRecipes;
      if (searchBar.value.length >= 3) {
        SortedRecipes = this.getSortedRecipesList(this.UserRequest().string);
        console.log(SortedRecipes);
        // console.log();
        console.log(
          `%c${SortedRecipes.length} recette(s)  trouvé correspondant a vos critéres`,
          "color: red; font-family:sans-serif; font-size: 15px;font-weight:bolder"
        );
      } else {
        SortedRecipes = this.recipesList;
      }
      // this.printCard(SortedRecipes);
      this.printCard(SortedRecipes);

      return SortedRecipes;
    });
  }
  //  affiche la page
  printPage() {
    this.searchBarRs();
    this.printCard(this.recipesList.recipes);
    this.inputAnim();
    this.displayIngredientsDrop(this.recipesList.getAllIngredients());
    this.displayAppareilsDrop(this.recipesList.getAllAppliance());
    this.displayUstensilsDrop(this.recipesList.getAllUstensils());
    this.makeTags();
  }
}
