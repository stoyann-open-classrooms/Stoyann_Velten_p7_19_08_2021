export function searchBarInp() {
  const searchBar = document.getElementById("recherche");

  searchBar.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      e.target.parentNode.classList.add("active-input");
    } else if (e.target.value === "") {
      e.target.parentNode.classList.remove("active-input");
    }
  });
}
