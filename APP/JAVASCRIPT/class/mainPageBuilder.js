import { Dropdown } from "../components/dropdowns.js";

export class MainPageBuilder {
  constructor(recipesList) {
    this.recipesList = recipesList;
    this.selectTag = [];
    this.value = [];
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
  cardsMaker(recipesList) {
    const cardsContainer = document.querySelector(".cards-container");

    let htmlContent = ``;

    for (let i = 0; i < recipesList.recipes.length; i++) {
      cardsContainer.innerHTML += `
        <a class="card" id='card-${recipesList.recipes[i].id}'>
        <div class="cards-cover" >
            <img src="./SRC/images/${recipesList.recipes[i].id}.jpg" class="cover" alt="${recipesList.recipes[i].name}">
        </div>
        <div class="cards-content">
            <div class="card-header">
                <h2 class="cards-title">${recipesList.recipes[i].name}</h2>
                <div class="cards-header-time">
                    <img src="./SRC/SVG/icone-time.svg" class="time-icone" alt="">
                    <p class="time-txt">${recipesList.recipes[i].time}MIN</p>
                </div>
            </div>
            <div class="cards-main">
            <ul class = "ingredients-list" id='ingr-list-${recipesList.recipes[i].id}'  >

            </ul>
                  <div class="cards-main-description">${recipesList.recipes[i].description}</div>
            </div>
        </div>
    </a>
        `;
      const ul = document.getElementById(
        `ingr-list-${recipesList.recipes[i].id}`
      );

      for (let j = 0; j < recipesList.recipes[i].ingredients.length; j++) {
        const liIngr = document.createElement("li");
        liIngr.classList.add("ingredient-item");
        liIngr.innerHTML = `
          <span>${recipesList.recipes[i].ingredients[j].ingredient}</span>
          `;
        if (recipesList.recipes[i].ingredients[j].quantity != undefined) {
          liIngr.innerHTML = `
            <span>${recipesList.recipes[i].ingredients[j].ingredient} : </span> ${recipesList.recipes[i].ingredients[j].quantity}
            `;
        }
        if (recipesList.recipes[i].ingredients[j].unit != undefined) {
          liIngr.innerHTML = `
            <span>${recipesList.recipes[i].ingredients[j].ingredient} : </span> ${recipesList.recipes[i].ingredients[j].quantity} ${recipesList.recipes[i].ingredients[j].unit}
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
    new Dropdown(AllIngredients, ul, inp, icone, span).printDrop();
  }

  // créer et affiche un tag si un item de la liste ingredients est sélèctioner
  makeTags() {
    let item = document.querySelectorAll(".item");
    const tagsContainer = document.querySelector(".tags-container");

    //  pour chaque items de la liste ingredients si un item est selectioner alors le tag associée s"affiche sur la page
    let index = 0;
    item.forEach((el) =>
      el.addEventListener("click", () => {
        console.log(el.textContent);

        tagsContainer.innerHTML += `
        <div class="tag"  id= "tag-${index}">
        <div class="tag-txt">${el.textContent}</div>
        <span class="tag-icone"><i class="far fa-times-circle " id= "close-tag-${index}" aria-hidden="true"></i></span>
    </div>
        `;

        const tag = document.getElementById(`tag-${index}`);
        document
          .getElementById(`close-tag-${index}`)
          .addEventListener("click", (e) => {
            tag.style.display = "none";
          });

        index++;
      })
    );
  }

  //  affiche la page
  printPage(allIngredients, AllAppareils, AllUstensils) {
    this.cardsMaker(this.recipesList);
    this.inputAnim();
    this.displayIngredientsDrop(allIngredients);

    this.makeTags();
  }
}
