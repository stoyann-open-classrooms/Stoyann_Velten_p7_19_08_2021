import { Utils } from "../utils/Utils.js";

export class Recipe {
  constructor(
    id,
    name,
    altTxt,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils
  ) {
    this.id = id;
    this.name = name;
    this.altTxt = altTxt;
    this.servings = servings;
    this.ingredients = ingredients;
    this.time = time;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils;
  }

  // permet de recuperer une recette en une chaine de carractere  json
  get stringifyRecipes() {
    return Utils.removeAccents(JSON.stringify(this, null, " \t"));
  }
}
