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

export class Dropdown {
  constructor(itemsList, btn, contentDrop, closeDrop, ulDrop) {
    this.itemsList = itemsList;
    this.btn = btn;
    this.contentDrop = contentDrop;
    this.closeDrop = closeDrop;
    this.ulDrop = ulDrop;
  }

  createList() {
    this.ulDrop.classList.add("scroller");
    this.ulDrop.classList.add("ul-drop");
    this.itemsList.forEach((ingr) => {
      const li = document.createElement("li");
      li.textContent = ingr;
      li.classList.add("item");
      this.ulDrop.append(li);
      li.addEventListener("click", (e) => {
        li.classList.toggle("tag-selected");
      });
    });
  }
  openDrop() {
    this.btn.addEventListener("click", (e) => {
      console.log(e.target);
      this.contentDrop.style.display = "flex";
      this.btn.style.display = "none";
    });
  }
  close() {
    this.closeDrop.addEventListener("click", () => {
      this.contentDrop.style.display = "none";
      this.btn.style.display = "flex";
    });
  }

  printDrop() {
    this.createList();
    this.openDrop();
    this.close();
  }
}
