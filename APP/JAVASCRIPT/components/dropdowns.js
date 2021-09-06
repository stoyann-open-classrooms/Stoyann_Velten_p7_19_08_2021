import { removeAccents } from "../utils/string.js";
export class Dropdown {
  constructor(itemsList, ulDrop, dropInp, icone, span, label, drop) {
    this.drop = drop;
    this.itemsList = itemsList;
    this.ulDrop = ulDrop;
    this.dropInp = dropInp;
    this.icone = icone;
    this.span = span;
    this.label = label;
    this.tagSelected = [];
    this.inpValue = this.inpValue;
  }

  clicked(events) {
    this.dropInp.classList.toggle("active");
    this.span.classList.toggle("pasive");
    this.ulDrop.classList.toggle("close");
    this.icone.classList.toggle("fa-chevton-down");
    this.icone.classList.toggle("fa-chevron-up");
    this.label.classList.add("resize");
    this.drop.classList.toggle("index");
  }
  //  si un item d'une liste est cliquer alors data-selected passe a true
  addDataAttributes() {
    this.dataset.selected = this.dataset.selected == "true" ? "false" : "true";
  }

  // creer la liste du dropdown associée

  createList() {
    this.ulDrop.classList.add("scroller");
    this.ulDrop.classList.add("ul-drop");
    this.itemsList.forEach((ingr) => {
      const li = document.createElement("li");
      li.setAttribute("data-selected", "false");
      li.textContent = ingr;
      li.classList.add("item");
      this.ulDrop.append(li);
      li.addEventListener("click", this.addDataAttributes);
    });
  }

  openDrop() {
    this.icone.addEventListener("click", (e) => {
      this.clicked(e);
    });
  }
  getRequestInp() {
    this.dropInp.addEventListener("input", (e) => {
      this.inpValue = removeAccents(this.dropInp.value);
      console.log(this.inpValue);
      return this.inpValue;
    });
  }
  printDrop() {
    this.createList();
    this.openDrop();
    // this.getRequestInp();
  }
}
