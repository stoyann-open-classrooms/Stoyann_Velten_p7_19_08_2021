// ++++++++++++++++++++++++ EXAMPLES UTTILISATION DE BIND ++++++++++++++++++++++++

// class Mouser {
//   constructor () {
//     this.counter = 0
//     this.clicked = function (event) {
//       this.counter ++
//       console.log('clicks:', this.counter)
//       if (this.counter >= 10) this.remove()
//     }
//     // save the click handler so it can be used in multiple places
//     this.clickHandler = this.clicked.bind(this);
//     window.addEventListener('click', this.clickHandler)
//   }

//   remove () {
//     console.log('Removing click listener') // this line runs ..
//     window.removeEventListener('click', this.clickHandler)
//   }
// }

// var mouse = new Mouser()

// =============================================================================================

export class Dropdown {
  constructor(itemsList, ulDrop, dropInp, icone, span) {
    this.itemsList = itemsList;
    this.ulDrop = ulDrop;
    this.dropInp = dropInp;
    this.icone = icone;
    this.span = span;
    this.tagSelected = [];
    this.clicked = function (events) {
      this.dropInp.classList.toggle("active");
      this.span.classList.toggle("pasive");
      this.ulDrop.classList.toggle("close");
      this.icone.classList.toggle("fa-chevton-down");
      this.icone.classList.toggle("fa-chevron-up");
    };
    this.clickHandler = this.clicked.bind(this);
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
    this.icone.addEventListener("click", this.clickHandler);
  }

  printDrop() {
    this.createList();
    this.openDrop();
  }
}
