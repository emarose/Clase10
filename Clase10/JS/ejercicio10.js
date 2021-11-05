// Crear una función que tome dos strings y los concatene sin las primeras 2 letras

const stringA = "Primer String";
const stringB = "Segundo String";

concatStrings = () =>{
  let concat = stringA.concat(stringB);
  let newString = concat.slice(3);
  console.log(newString);
}

concatStrings();