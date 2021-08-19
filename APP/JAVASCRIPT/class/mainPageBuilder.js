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
}
