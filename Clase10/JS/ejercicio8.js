//Crear una función que te diga si el ultimo caracter de un string es una b

const arrayb = "hola yo termino en b"

buscarLetra = () => {
 
  if (arrayb.slice(-1) == "b"){
    return console.log("la ultima letra ES b");
  }else{
    return console.log("la ultima letra no es b");
  } 
}
buscarLetra();