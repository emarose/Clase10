// Crear una función que tome un string y cree uno nuevo utilizando las 3 primeras y ultimas letras,

let string9 = "Hing"

crearString = () =>{
  if (string9.length < 6){
    return console.log("El string debe tener almenos 6 caracteres")
  }else{
    let strA = string9.slice(0,3)
    let strB = string9.slice(-3)
  
    return console.log(strA.concat(strB))
  }
}

crearString();