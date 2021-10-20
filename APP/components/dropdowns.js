export class Dropdown {
  constructor(dropList, type) {
    this.dropList = dropList;
    this.type = type;
  }

  listDropdown() {
    let htmlContent = ``;
    for (let item of this.dropList) {
      let li = document.createElement("li");

      li = `
            <li class = "items">${item}</li>
            `;

      htmlContent += li;
    }
    return htmlContent;
  }

  get dropdown() {
    return `

<div class="dropdown dropdown-${this.type} ">
    <h3>${this.type}</h3>
    <input type="text" class="input" id="input-${
      this.type
    }" placeholder="Recherche un ${this.type}">
    <button class="btn-drop btn-drop-${
      this.type
    }"><i class="icone icone-ingr fas fa-chevron-down"></i></button>

    <ul class="list list-${this.type}">${this.listDropdown()}</ul>
</div>
`;
  }
}