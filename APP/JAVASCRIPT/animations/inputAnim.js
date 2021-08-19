export function inputAnim() {
  const searchBar = document.getElementById("search-bar");
  console.log(searchBar);
  searchBar.addEventListener("input", function (e) {
    if (e.target.value !== "") {
      e.target.parentNode.classList.add("active-input");
    } else if (e.target.value === "") {
      e.target.parentNode.classList.remove("active-input");
    }
  });
}
