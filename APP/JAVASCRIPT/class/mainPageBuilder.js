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
          <ul>
          <li></li>
          <li></li>
          <li></li>
          </ul>
                <div class="cards-main-description">${recipesList.recipes[i].description}</div>  
          </div>
      </div>
  </a>
      `;
    }
  }

  printCard() {
    this.cardsMaker(this.recipesList);
  }
}