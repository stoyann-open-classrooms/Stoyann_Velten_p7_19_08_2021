import { keepOnlyLettersAndRemoveAccents } from "../utils/string.js";

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

  get applianceNameWithoutAccent() {
    return keepOnlyLettersAndRemoveAccents(this.appliance);
  }

  get nameWithoutAccent() {
    return keepOnlyLettersAndRemoveAccents(this.name);
  }
}
