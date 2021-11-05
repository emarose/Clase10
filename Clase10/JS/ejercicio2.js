//Crear una función que tome horas y las convierta a segundos
const horas = 10;
PasarAsegundos = () => {
    let segundos = 10 * 60 * 60;
  return `${horas} horas -> ${segundos} segundos` ;
}

console.log(PasarAsegundos())