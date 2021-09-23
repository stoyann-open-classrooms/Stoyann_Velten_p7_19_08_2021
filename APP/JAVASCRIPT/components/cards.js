export class Cards {
  constructor(recipe) {
    this.recipe = recipe;
  }

  ingredientsContents() {
    let htmlContent = ``;
    for (let ingredient of this.recipe.ingredients) {
      let li = document.createElement("li");
      li.classList.add("ingredient-item");

      if (ingredient.quantity != undefined) {
        li = `
          <li class = "ingredient-item"><span>${ingredient.ingredient} : </span> ${ingredient.quantity}</li>
          `;
      }
      if (ingredient.unit != undefined) {
        li = `
            <li  class = "ingredient-item" ><span>${ingredient.ingredient} : </span> ${ingredient.quantity} ${ingredient.unit}</li>
          `;
      } else {
        li = `
            <li  class = "ingredient-item" > <span>${ingredient.ingredient}</span></li>
         `;
      }

      // console.log(li);
      htmlContent += li;
    }
    return htmlContent;
  }

  get card() {
    return `
      
      <div class="card">
                <div class="card-header">
                <img src="./SRC/images/${
                  this.recipe.id
                }.jpg" class="cover" alt="">
                
                </div>
                <div class="card-content">
                    <div class="content-top">
                        <h3 class="card-title">${this.recipe.name}</h3>
                        <div class="time"><i class="far fa-clock"></i>${
                          this.recipe.time
                        }MIN</div>
                    </div>
                    <div class="content-body">
                        <ul class="ingredient-list">
                       ${this.ingredientsContents()}
                       
                        </ul>
                        <div class="card-excerpt">
                        ${this.recipe.description}
                     
                        </div>
                    </div>
                </div>
            </div>
      `;
  }
}
