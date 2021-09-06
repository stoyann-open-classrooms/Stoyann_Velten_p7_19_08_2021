import { Dropdown } from "../components/dropdowns.js";
import { Cards } from "../components/cards.js";
import { Utils } from "../utils/utils.js";

export class MainPageBuilder {
  constructor(recipesList) {
    this.recipesList = recipesList;
    this.sortRecipe = [];
    this.tagSelected = [];
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

  // créer et affiche le contenu du dropdown ingrédients
  displayIngredientsDrop(AllIngredients) {
    const ul = document.getElementById("ingredient-list");
    const icone = document.getElementById("dropdown-ingredient-icon");
    const span = document.querySelector(".ingr-span");
    const label = document.getElementById("dropdown-ingredient-label");
    const inp = document.getElementById("ingredient-inp");
    const drop = document.querySelector(".dropdown-ingredients");
    const dropIngr = new Dropdown(
      AllIngredients,
      ul,
      inp,
      icone,
      span,
      label,
      drop
    ).printDrop();
    return dropIngr;
  }
  // créer et affiche le contenu du dropdown Apareils

  displayAppareilsDrop(AllAppareils) {
    const ul = document.getElementById("appareil-list");
    const inp = document.querySelector(".app-inp");
    const icone = document.getElementById("dropdown-appareil-icon");
    const span = document.querySelector(".app-span");
    const label = document.getElementById("dropdown-appareil-label");
    const drop = document.querySelector(".dropdown-appareil");

    new Dropdown(AllAppareils, ul, inp, icone, span, label, drop).printDrop();
  }
  // créer et affiche le contenu du dropdown Ustensils

  displayUstensilsDrop(AllUstensils) {
    const ul = document.getElementById("ustensils-list");
    const inp = document.querySelector(".ust-inp");
    const icone = document.getElementById("dropdown-ustensils-icon");
    const span = document.querySelector(".ust-span");
    const label = document.getElementById("dropdown-ustensils-label");
    const drop = document.querySelector(".dropdown-ustensils");

    new Dropdown(AllUstensils, ul, inp, icone, span, label, drop).printDrop();
  }

  sortIngr(AllIngredients) {
    AllIngredients.forEach((el) => {
      if (el.includes(Utils.getFilterRequest)) {
        console.log(el);
        AllIngredients.push(el);
      }
      return AllIngredients;
    });
  }
  //  créer et affiche un tag si un item de la liste ingredients est sélèctioner
  makeTags() {
    const ingrList = document.getElementById("ingredient-list").childNodes;
    const appList = document.getElementById("appareil-list").childNodes;
    const ustList = document.getElementById("ustensils-list").childNodes;

    const tagsContainer = document.querySelector(".tags-container");

    ingrList.forEach((el) =>
      el.addEventListener("click", () => {
        tagsContainer.innerHTML += `
        <div class="tag ingredients" >${el.textContent}<i class="far fa-times-circle close-tag"></i></div>
        `;
        this.closeTag();
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

    return this.tagSelected;
  }
  closeTag() {
    const tag = document.querySelectorAll(".tag");

    tag.forEach((tag) => {
      const close = document.querySelector(".close-tag");
      close.addEventListener("click", () => {
        tag.style.display = "none";
      });
    });
  }
  getTagsSelected() {
    const item = document.querySelectorAll(".item");
    item.forEach((el) =>
      el.addEventListener("click", () => {
        this.tagSelected.push(el.textContent);
        el.classList.add("tag-selected");
      })
    );

    return this.tagSelected;
  }

  //  affiche la page
  printPage() {
    this.printCard(this.recipesList.makeRecipesListToDisplay());

    this.inputAnim();
    this.displayIngredientsDrop(this.recipesList.getAllIngredients());
    this.displayAppareilsDrop(this.recipesList.getAllAppliance());
    this.displayUstensilsDrop(this.recipesList.getAllUstensils());
    this.makeTags();
    this.closeTag();
    this.getTagsSelected();
    this.sortIngr(this.recipesList.getAllIngredients());
  }
}
