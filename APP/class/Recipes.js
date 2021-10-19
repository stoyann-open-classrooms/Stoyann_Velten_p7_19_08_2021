import { Utils } from "../utils/utils.js";

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
  get stringifyRecipes() {
    // console.log(removeAccents(JSON.stringify(this, null, "\t")));
    return removeAccents(JSON.stringify(this, null, " \t"));
  }
}
