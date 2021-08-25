export class Cards {
  constructor(recipe, cardsId) {
    this.recipe = recipe;
    this.cardId = cardsId;
  }

  ingredientCards() {}
  get card() {
    return `
    <a class="card" id='card-'>
    <div class="cards-cover" >
        <img src="./SRC/images/.jpg" class="cover" alt="">
    </div>
    <div class="cards-content">
        <div class="card-header">
            <h2 class="cards-title">${this.recipe.name}</h2>
            <div class="cards-header-time">
                <img src="./SRC/SVG/icone-time.svg" class="time-icone" alt="">
                <p class="time-txt">${this.recipes.time}MIN</p>
            </div>
        </div>
        <div class="cards-main">
        <ul class = "ingredients-list" id='ingr-list-'>
  
        </ul>
              <div class="cards-main-description">${this.recipe.description}</div>
        </div>
    </div>
  </a>
    `;
  }
}
