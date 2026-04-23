// Estruturas Condicionais em javascript

//Definiçao: Permitem executar codigos diferentes dependendo de certas condiçoes 

//If (SE)

//////////////////////////////////////////////////////////////////////////////////////

/*

let idade = 18
if(idade >=20){
    console.log('Você atende a condiçao')
} else{
    console.log('Você nao atende a condiçao')
}

*/

/*

let nota = 6
if(nota>=10){
    console.log('Exelente')
}else if (nota >= 6){
    console.log('Pode melhorar')
}else if (nota < 6){
    console.log('Você reprovou')
}

*/


/*
let idade = 30
let temCarteira = true

if(idade>=18 && temCarteira){
console.log('Pode dirigir')
}else {
    console.log('Nao pode dirigir')
}

*/

/*

let pontuaçao = 700
if(pontuaçao>1000){
    console.log('Lendas dos games')
}else if (pontuaçao >500 ){
    console.log('Jogador pro')
}else if (pontuaçao < 500){
    console.log('Continue tentando')
}

*/

/*

let Coragem = 60
let inteligencia =70
let lealdade = 79

if(Coragem>=80){
    console.log('Grifinoria')
}else if (inteligencia >= 80 ){
    console.log('Corvinal')
}else if (lealdade>= 80){
    console.log('Lufa-Lufa')
}else {
    console.log('Soncerina')
}

*/


/*
let traço = "inteligencia"

if (traço === "coragem") {
    console.log("Eleven")
} else if (traço === "inteligencia") {
    console.log("Will")
} else if (traço === "lealdade") {
    console.log("Mike")
} else {
    console.log("Demogorgon")
}

*/

let serie = "Relaxando"
if (serie === "Triste"){
    console.log("Assista a serie The Walking Dead ")
}else if (serie === 'Relaxando'){
    console.log('Olhe a serie Midnight Gospel')
}else if (serie === 'Curioso'){
    console.log("Assista Dark")
}else if (serie === 'Animado'){
    console.log('Assista The Office')
}else{
    console.log("Nao assista nada")
}
