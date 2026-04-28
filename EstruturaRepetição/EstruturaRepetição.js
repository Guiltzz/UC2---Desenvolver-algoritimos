/*

Estrutura de repetição (LOOPS OU LAÇOS)
//==========================================================
Definição: Permitem executar um bloco de codigo varias vezes enquanto uma condiçao for verdadeira
//==========================================================
While (Enquanto)

*/

/*
let numero = 0

//Estrutura while e a condiçao para ela executar

while(numero<10){
    console.log(numero)

    numero++
}

*/

/*
let estomago = 0 
while (estomago < 8 ){
    console.log("Quero mais coxinha!!")
    estomago++
}

*/

/*

let estomagoGrande = 0 
while (estomagoGrande < 100 ){
    console.log("Quero mais coxinha!!")
    estomagoGrande = estomagoGrande + 10
}

*/

/*
let contador = 10 
while(contador >= 0){
    console.log(contador)
    contador--
}
console.log('Foguete lançado')
*/


/*
let flexao = 0 
while (flexao <= 20 ){
    console.log(`Flexao ${flexao} `)
    flexao++
}
    
*/

/*

let powerUp = 0 
while (powerUp <= 250 ){
    console.log(`Energia : ${powerUp}`)
    powerUp=powerUp+5
}

*/

/*
let contagem = 30
while(contagem){
    console.log(`Ele vai acordar em ${contagem} segundos`)
    contagem = contagem-3
}
console.log('O dragao acordou')

*/


/*
let passos = 10
while(passos){
    console.log(`Voce esta a ${passos} passos`)
    passos = passos- 2
}
console.log("Voce escapou")
*/


/*
let alunos = ['Gustavo','João','Pedro','Ana']

/*Criamos uma variavel de controle chamada 'posiçao'
Essa variavel vai representar a posiçao atual do array e começa na posiçao 0



let posiçao = 0

//A condiçao aq é 'i<alunos.lenght'
//Entao enquanto 'posiçao for menor que o numero de alunos, o loop continua

while (posiçao < alunos.length){
    console.log(alunos[posiçao])

    posiçao++

}

*/


/*
let frutas = ['Banana','Maça','Uva']
let posiçao = 0

while (posiçao <frutas.length){
    console.log(`A fruta ${frutas[posiçao]} te dá superpoder`)

    posiçao++
}
*/


/*
let moedas = [3,8,4]
let i= 0
let totalMoedas = 0

while (i < moedas.length){
    totalMoedas += moedas[i]

    i++
}
console.log(`Voce tem ${totalMoedas} meodas`)

*/


/*
let convidados = ['Alien1','Alien2','Alien3']
let p = 0
while(p<convidados.length){
    console.log(`Oi ${convidados[p]},venha dançar`)
    p++
}
*/


/*
let numeros = [4,8,20,14]
let p = 0
let tesouroMaior = numeros[0]
//Loop para verificar todos os tesouros
while(p<numeros.length){
    //Se o tesouro atual for maior que o maior encontrado,atualizamos
    if(numeros[p] > tesouroMaior){
        tesouroMaior = numeros[p]

    }
    p++
}
console.log(`O maior tesouro é ${tesouroMaior}`)

*/


/*
let velocidades =[30,50,80,120,60]
let p = 0
let maiorVelocidade = velocidades[0]
while(p<velocidades.length){
    if(velocidades[p]>maiorVelocidade){
        maiorVelocidade = velocidades[p]
}
p++
}
console.log(`A maior velocidade é ${maiorVelocidade}`)

*/

//============================================================================
//                                 For                                         
//============================================================================
/*
for(let p = 0 ; p <10; p++){
    console.log('Repetição numero: ', p)
}
*/
//Explicação:
//Let p = 0 ->Valor inicial
//p < 10 -> conidção (Enquanto for verdadeira,repete)
//p++ -> incremento (aumento 1 a cada volta)

/*
for(let i = 0 ; i <= 15; i++){
    console.log(`Sonic coletou ${i}`)
}
console.log("Ele coletou todas as moedas")

*/

//==============================================================================
//For - Com condicionais
//Verificando numeros pares ... e se tem multiplo de 5

//Loop´de 0 a 100

/*

for (let i = 0; i <= 100; i++){
    //Verificando se o numero é par ou impar (condicional)
    if( i % 2 === 0 ){//verifico se o numero em i do laço for que esta no momento é par
    console.log(i+" é par")
}else{
    console.log(i+' é impar')
}
if (i !== 0 && i%5 === 0){
    console.log(i + ' é multiplo de 5')
}

}

*/

for(let i = 0;  i <=5; i++){
    if (i===5){
        console.log('Sexta feira')
    }else {
        console.log(i+' Dia de trabalho')
    }

    }