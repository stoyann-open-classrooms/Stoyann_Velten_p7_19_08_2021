import { Dropdown } from "../components/dropdowns.js";

export class MainPageBuilder {
  constructor(recipesList) {
    this.recipesList = recipesList;
    this.tagSelected = [];
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
      // console.log(request);
    });
    ingrList.forEach((el) =>
      el.addEventListener("click", () => {
        request.filters.push(el.textContent);
        // console.log(request);
      })
    );
    return request;
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
      cardsContainer.innerHTML += `
        <a class="card" id='card-${this.recipesList.recipes[i].id}'>
        <div class="cards-cover" >
            <img src="./SRC/images/${this.recipesList.recipes[i].id}.jpg" class="cover" alt="${this.recipesList.recipes[i].name}">
        </div>
        <div class="cards-content">
            <div class="card-header">
                <h2 class="cards-title">${this.recipesList.recipes[i].name}</h2>
                <div class="cards-header-time">
                    <img src="./SRC/SVG/icone-time.svg" class="time-icone" alt="">
                    <p class="time-txt">${this.recipesList.recipes[i].time}MIN</p>
                </div>
            </div>
            <div class="cards-main">
            <ul class = "ingredients-list" id='ingr-list-${this.recipesList.recipes[i].id}'  >

            </ul>
                  <div class="cards-main-description">${this.recipesList.recipes[i].description}</div>
            </div>
        </div>
    </a>
        `;
      const ul = document.getElementById(
        `ingr-list-${this.recipesList.recipes[i].id}`
      );

      for (let j = 0; j < this.recipesList.recipes[i].ingredients.length; j++) {
        const liIngr = document.createElement("li");
        liIngr.classList.add("ingredient-item");
        liIngr.innerHTML = `
          <span>${this.recipesList.recipes[i].ingredients[j].ingredient}</span>
          `;
        if (this.recipesList.recipes[i].ingredients[j].quantity != undefined) {
          liIngr.innerHTML = `
            <span>${this.recipesList.recipes[i].ingredients[j].ingredient} : </span> ${this.recipesList.recipes[i].ingredients[j].quantity}
            `;
        }
        if (this.recipesList.recipes[i].ingredients[j].unit != undefined) {
          liIngr.innerHTML = `
            <span>${this.recipesList.recipes[i].ingredients[j].ingredient} : </span> ${this.recipesList.recipes[i].ingredients[j].quantity} ${this.recipesList.recipes[i].ingredients[j].unit}
            `;
        }
        ul.append(liIngr);
      }
    }
  }

  // créer et affiche le contenue du dropdown ingrédients
  displayIngredientsDrop(AllIngredients) {
    const ul = document.getElementById("ingredient-list");
    const inp = document.getElementById("ingredient-inp");
    const icone = document.getElementById("dropdown-ingredient-icon");
    const span = document.querySelector(".ingr-span");
    const label = document.getElementById("dropdown-ingredient-label");
    new Dropdown(AllIngredients, ul, inp, icone, span, label).printDrop();
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
    this.makeTags();
  }
}
