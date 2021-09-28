import { removeAccents } from "../utils/string.js";

export class Dropdown {
  constructor(dropdown, btn, icone, ul, itemList) {
    this.dropdown = dropdown;
    this.btn = btn;
    this.icone = icone;
    this.ul = ul;
    this.itemList = itemList;
  }

  // createList() {
  //   this.itemList.forEach((item) => {
  //     const li = document.createElement("li");
  //     li.textContent = item;
  //     this.ul.append(li);
  //   });
  // }

  // printDrop() {
  //   this.createList();
  // }
}
