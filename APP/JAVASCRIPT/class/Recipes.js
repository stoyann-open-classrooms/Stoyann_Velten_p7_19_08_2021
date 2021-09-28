import { removeAccents } from "../utils/string.js";

export class Recipe {
  constructor(
    id,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils
  ) {
    this.id = id;
    this.name = name;
    this.servings = servings;
    this.ingredients = ingredients;
    this.time = time;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils;
  }

  // // retourne une chaine de caractére : appareil de la recette sans accents
  // get applianceNoAccent() {
  //   return removeAccents(this.appliance);
  // }

  // // retourne une chaine de caractére : nom de la recette sans accents
  // get nameNoAccent() {
  //   return removeAccents(this.name);
  // }
  // // retourne un tableau avec la liste des ingrédients de la recette sans accents
  // get ingredientsNoAccent() {
  //   const ingredientsList = [];

  //   for (let item of this.ingredients) {
  //     ingredientsList.push(removeAccents(item.ingredient));
  //   }
  //   return ingredientsList;
  // }
  // get descriptionNoAccent() {
  //   return removeAccents(this.description);
  // }
  get stringifyRecipes() {
    // console.log(removeAccents(JSON.stringify(this, null, "\t")));
    return removeAccents(JSON.stringify(this, null, " \t"));
  }
}
