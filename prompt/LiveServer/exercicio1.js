/*

//poderes
let poder1 = prompt("Escolha o seu primeiro poder(fogo, gelo, raio): ")
let poder2 = prompt("Escolha o seu segundo poder para combinar: ")
//cristais
let cristais1 = prompt("Quantos cristais vai usar para ativar o poder "+ poder1 + "?")
let cristais2 = prompt("Quantos cristais vai usar para ativar o poder "+ poder2 + "?")
//converter para numeros
cristais1 = Number(cristais1)
cristais2 = Number(cristais2)

let totalCristais = cristais1 + cristais2

alert("Você combinou os poderes " + poder1 + " e " + poder2 + " usando " + totalCristais + " cristais mágicos no total." )

*/

let ingrediente1 = prompt("Quantas gotas do primeiro ingrediente você vai usar?")
let ingrediente2 = prompt("Quantas gotas do segundo ingrediente você vai usar?")
ingrediente1 = Number(ingrediente1)
ingrediente2 = Number(ingrediente2)

let total = ingrediente1 + ingrediente2

alert(`Voce conseguiu equilibrar a poçao colocando ${total} de gotas` )