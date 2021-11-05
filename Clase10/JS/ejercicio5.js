//Crear una funcion que tome un array y lo invierta
const array3 = ["pera","banana","manzana","kiwi"];
PasarAreverse2 = () => {
  let arrayCopy = [];
  for (i = 0; i < array3.length; i++) {
    arrayCopy[i] = array3[i];
  }
  let reversedArray = arrayCopy.reverse();
  return `Array original: ${array3} Array invertido: ${reversedArray}`;
}

console.log(PasarAreverse2());