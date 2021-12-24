import { MainPageBuilder } from "../class/MainPageBuilder.js";
import { Utils } from "../utils/Utils.js";

export class Dropdown {
  constructor(dropList, type) {
    this.dropList = dropList;
    this.type = type;
  }

  listDropdown() {
    let htmlContent = ``;
    let v = 0;

    for (let item of this.dropList) {
      let li = document.createElement("li");

      li = `
            <li  class = "items items-${this.type} " id="item-${v}" >${item}</li>
            `;

      htmlContent += li;
      v++;
    }

    return htmlContent;
  }

  get dropdown() {
    return `

<div class="dropdown dropdown-${this.type} ">
    <h3>${this.type}</h3>
    <input   type="text" class="input" id="input-${
      this.type
    }" placeholder="Recherche un ${this.type}">
    <button class="btn-drop btn-drop-${
      this.type
    }"><i class="icone icone-ingr fas fa-chevron-down"
    }"></i></button>

    
    <ul class="list list-${this.type} " >${this.listDropdown()}</ul>
</div>
`;
  }
}
