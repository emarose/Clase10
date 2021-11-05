//Crear una función que tome un array y devuelva un solo string de cada elemento separado por espacio.
const array = ["pera","banana","manzana","kiwi"];
PasarAstring = () => {
    let stringed = array.join(" ");

  return stringed;
}

console.log(PasarAstring());