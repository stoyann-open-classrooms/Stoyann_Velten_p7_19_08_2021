export class Utils {
  // static userRequest() {
  //   const searchBar = document.getElementById("search-bar");
  //   let searchBarVal;
  //   searchBar.addEventListener("input", (e) => {
  //     searchBarVal = searchBar.value;
  //     return searchBarVal;
  //   });
  // }
  static getFilterRequest() {
    const searchBar = document.getElementById("ingredient-inp");
    let inpValue;
    searchBar.addEventListener("input", (e) => {
      inpValue = removeAccents(searchBar.value);
      console.log(inpValue);
    });
    return inpValue;
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
