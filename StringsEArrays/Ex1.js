/*const frase1 = "   Maria Silva        "
console.log(frase1.trim())
*/

/*
const apelido = "SuperCodador123"
console.log(apelido.length)
*/

/*
const frase1 = "Eu adoro estudar programaçao todos os dias"
console.log(frase1.includes("ódio"))

*/

/*
const frase = "JaVa ScriPT É InClIvEL"
const fraseM= frase.toLowerCase()
console.log(fraseM)

*/


/*
const frase = "Preciso de ajuda urgente"
const fraseM= frase.toUpperCase()
console.log(fraseM)
*/
/*
const fraseF = "Esse filme é muito ruim,ruim demais!"
const fraseNova = fraseF.replaceAll ("ruim","bom")
console.log(fraseNova)
*/

/*
const fraseSecreta = ("  SeCrEtO123  ")
const fraseC1 = fraseSecreta.trim()
const fraseC2 = fraseC1.toLowerCase()
const fraseC3 = fraseC2.includes("secreto")
console.log(fraseC2)
console.log(fraseC3)
console.log(fraseC2.length)

*/

/*
const lista = ("  kamehameha, genki-dama, kaoiken, spirit bomb  ")
const espaço = lista.trim()
const maiscula = espaço.toUpperCase()
const substituir = maiscula.replaceAll (",","|")
const verificar = substituir.includes("SPIRIT BOMB")


console.log(substituir)
console.log(verificar)
console.log(substituir.length)
*/

/*
let heroi1 = "  Naruto"
let heroi2 = "  Deku"

const remover = heroi1.trim()
const remover2 = heroi2.trim()
const minuscula = remover.toLowerCase()
const maiscula = remover2.toUpperCase()
const frase = "Naruto encontra deku no mundo ninja"
const substituir = frase.replaceAll ("deku","Sasuke")
const verificar = substituir.includes("Naruto")

console.log(minuscula)
console.log(maiscula)
console.log(substituir)
console.log(verificar)
*/

/*
const seriesBoas = ["Breaking Bad","B99"]
const temBreakingBad = seriesBoas.includes("Breaking Bad")
const temGOT = seriesBoas.includes("GOT")

console.log("Na array seriesBoas, tem Breaking Bad", temBreakingBad)
console.log("Na array seriesBoas, tem Got", temGOT)
*/

/*
const pokemonsCap= ["Pikachu","Charmander","Bulbasaur","Squirtle"]

const verificar = pokemonsCap.includes("Pikachu")
const verificar2 = pokemonsCap.includes("Meowth")

console.log(verificar)
console.log(verificar2)
*/

/*
const ingredientes = ["Fermento","Farinha","Ovo","Açucar","Cacau em po","Leite","Sal","Granulado","Leite condensado","Morango","Leite em pó","Manteiga"]
const  baseBolo = ["Fermento","Farinha","Ovo","Açucar","Sal","Leite"]
const recheio1 = ["Brigadeiro"]
const recheio2 = ["Morango"] 
const recheio3 = ["Brigadeiro de Leite em pó"]
const boloMontado = [baseBolo, recheio1,baseBolo,recheio1,recheio2,recheio3]
console.log(boloMontado)
*/

/*
const compras= ["Arroz","Feijão","Macarrao"]

compras.push("Sal")

console.log(compras)

*/

/*
let inventario =[]
inventario.push("Espada,Escudo")
console.log(inventario)
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Propriedade ou Metodo unshift() : adiciona

/*
const cor = ["Vermelho, Azul"];
cor.unshift ("Verde");
console.log(cor);

*/

/*
const marca = ["marca1,marca2,marca3"]
marca.unshift("Nokia")
console.log(marca)
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Metodo shift(): Remove

let frutas = ["Maça","Banana","LARANJA"]
frutas.shift()
console.log(frutas)