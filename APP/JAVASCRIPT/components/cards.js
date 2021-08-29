export class Cards {
  constructor(recipe) {
    this.recipe = recipe;
  }

  ingredientsContent() {
    let htmlContent = ``;
    for (let ingredient of this.recipe.ingredients) {
      let li = document.createElement("li");
      li.classList.add("ingredient-item");

      if (ingredient.quantity != undefined) {
        li = `
      <li><span>${ingredient.ingredient} : </span> ${ingredient.quantity}</li>
      `;
      }
      if (ingredient.unit != undefined) {
        li = `
        <li><span>${ingredient.ingredient} : </span> ${ingredient.quantity} ${ingredient.unit}</li>
      `;
      } else {
        li = `
        <li> <span>${ingredient.ingredient}</span></li>
     `;
      }

      // console.log(li);
      htmlContent += li;
    }
    return htmlContent;
  }

  get card() {
    return `
    <a class="card" id='card-'>
    <div class="cards-cover" >
        <img src="./SRC/images/${this.recipe.id}.jpg" class="cover" alt="">
    </div>
    <div class="cards-content">
        <div class="card-header">
            <h2 class="cards-title">${this.recipe.name}</h2>
            <div class="cards-header-time">
                <img src="./SRC/SVG/icone-time.svg" class="time-icone" alt="">
                <p class="time-txt">${this.recipe.time}MIN</p>
            </div>
        </div>
        <div class="cards-main">
        <ul class = "ingredients-list" id='ingr-list-'>
        ${this.ingredientsContent()}
  
        </ul>
              <div class="cards-main-description">${
                this.recipe.description
              }</div>
        </div>
    </div>
  </a>
    `;
  }
}
