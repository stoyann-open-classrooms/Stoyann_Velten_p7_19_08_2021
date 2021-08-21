// retourne la chaine de caractére entrer en paramétres sans accent et en minuscule
export function removeAccents(string) {
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
export function capitalizeFirstChar(str) {
  return str[0].toUpperCase() + str.slice(1);
}
