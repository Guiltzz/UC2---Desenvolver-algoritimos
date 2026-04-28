//////////////////////////////////////////////////////////////////////////////////////////

//Funçao é um bloco de codigo que executa uma tarefa especifica

//Receba algo (Entrada de parametros)
//Processo alo
//Entrega um resultado (Saida ou retorno)

///////////////////////////////////////////////////////////////////////////////////////

//1.Funçao declarada(padra/sem parametros)


/*
function teste(){
console.log("aaaaaaaaa")
}

teste()

*/


//////////////////////////////////////////////////////////////////////////////////////

//2.Funçao passar informaçoes para funçao.Essas informaçoes 
//sao os paremetros que ele vai precisar para executar sua tarefa

//////////////////////////////////////////////////////////////////////////////////////


/*


function somar(a,b){
    return a+b

}
let resultado = somar(5,3)

console.log(resultado)

*/


/*
function multiplicar (a,b){
    return a*b

}
let resultado = multiplicar(5,3)

console.log(resultado)
*/

/*
function saudar (nome,hora){
console.log(`Bom ${hora}, ${nome}`)


}
saudar("Maria","Tarde")
saudar("Pedro","Dia")
saudar("Joao","Noite")

*/

/*
function converte(fahrenheit){
    const ceelsius =(fahrenheit - 32) * 5/9
    console.log(`${fahrenheit}°F equivale a ${ceelsius.toFixed(1)} °F`)

}

converte(45)

*/

/*
function converter(pilas){
    const dolar = pilas / 5
    const euro = pilas  / 6
    const bolivar = pilas * 0.10
    console.log(`${pilas} reais equivalem a ${dolar} dolares, euros fica ${euro.toFixed(2)} e em bolivar fica ${bolivar}`)
}
converter(5)

*/
//
// 3.Arrow Functions (Funçao de seta=>): possuem uma sintaxe mais curta
const multiplicar = (x,y) => x * y
console.log(multiplicar(4,5))


