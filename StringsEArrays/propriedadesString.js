// A propriedade length nos diz qual é o tamamnho de uma string, incluindo os espaços


const nome = "Joao alvez carvalhos"
console.log(nome.length)

//////////////////////////////////////////////////////////////////////////////////////
//Metodo toLowercase
//Transforma todas as letras da string em minusculas
const frase= "OOOO DIA ESTA LINDOO"
const fraseMinuscula = frase.toLocaleLowerCase()
console.log (fraseMinuscula)

////////////////////////////////////////////////////////////////////////////////////
// Metodo toUppercase()
// Transforma toas as letras da string em maiscula

const frase2 = "o dia esta lindo"
const fraseMaiscula = frase2.toUpperCase()
console.log (fraseMaiscula)

///////////////////////////////////////////////////////////////////////////////////
//Metodo trim()
//Retira espaços que existem antes e depois de sua string (util em formularios e logins)
const email = "          senacrs@gmail.com         "
console.log(email.trim())

/////////////////////////////////////////////////////////////////////////////////////////
//Metodos: incluides(caracteres): 
// determina se um conjunto de caracteres pode ser encontrado dentro de uma string , retorna um valor booleano true ou false

const frase3 = ("A força de um guerreiro nao vem de vencer sozinho,mas de nunca desistir de luta pelo que acredita")
console.log(frase3.includes("guerreiro"))
console.log(frase3.includes("desiste"))
console.log(frase3.includes("luta"))
console.log(frase3.includes("acreditar"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Metodo:replaceAll(char1, char2)
// Troca todas as acorrências de um conjunto de caracteres (char1) por alguma outra coisa (char2)
const frase4 = ("Hoje comi cenoura,adoro batata")
const novaFrase4 = frase4.replaceAll("cenoura","batata")
console.log(novaFrase4)