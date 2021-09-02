export class Utils {
  static sayHello() {
    console.log("hello");
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", (e) => {
      console.log(searchBar.value);
    });
  }
  static test() {
    let tagSelected = [];
    const item = document.querySelectorAll(".item");
    item.forEach((el) =>
      el.addEventListener("click", () => {
        tagSelected.push(el.textContent);
        el.classList.add("tag-selected");
      })
    );
    console.log(tagSelected);
    return tagSelected;
  }

  static removeAccents(string) {
    return string
      .toLowerCase()
      .replace(/[.,;:!\?\*"()°]/g, "")
      .replace(/[']/g, " ")
      .replace(/[\d]/g, "")
      .replace(/[àäâ]/g, "a")
      .replace(/[ç]/g, "c")
      .replace(/[éèêë]/g, "e")
      .replace(/[îï]/g, "i")
      .replace(/[ôö]/g, "o")
      .replace(/[ùûû]/g, "u");
  }

  // retourne la chaine de caractére entrer en paramétres avec la premiere letres en majuscule
  static capitalizeFirstChar(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}
