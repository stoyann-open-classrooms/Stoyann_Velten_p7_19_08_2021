export class MainPageBuilder {
  /**
   * @param {RecipesList} recipesList
   */
  constructor(recipesList) {
    this.recipesList = recipesList;
  }

  get userRequest() {
    const searchBarInput = document.getElementById("search-bar");
    searchBarInput.addEventListener("input", function () {
      console.log({ userInput: searchBarInput.value.trim() });
    });
    return {
      userInput: searchBarInput.value.trim(),
    };
  }

  inputAnim() {
    const searchBar = document.getElementById("search-bar");
    console.log(searchBar);
    searchBar.addEventListener("input", function (e) {
      if (e.target.value !== "") {
        e.target.parentNode.classList.add("active-input");
      } else if (e.target.value === "") {
        e.target.parentNode.classList.remove("active-input");
      }
    });
  }

  cardsMaker(recipesList) {
    const cardsContainer = document.querySelector(".cards-container");
    let htmlContent = ``;

    for (let i = 0; i < recipesList.recipes.length; i++) {
      // htmlContent += new RecipeCard(recipesList.recipes[i], i).html;
      console.log(recipesList.recipes[i]);
      cardsContainer.innerHTML += `
      <a class="card">
      <div class="cards-cover" id='${recipesList.recipes[i].id}'>
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
        console.log(recipesList.recipes[i].ingredients[j].ingredient);
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

  printCard() {
    this.cardsMaker(this.recipesList);
  }
}
