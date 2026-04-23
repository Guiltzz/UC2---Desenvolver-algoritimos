
//Verificar se o numero é par
const prompt = require ('prompt-sync')()
/*
let numero = Number(prompt('Digite um numero:'))
//Condicionais if/else
    if(numero % 2 === 0){
        console.log('esse numero é par')
    }else{
        console.log('Esse numero é impar')
    }
        
    */

    /*
    //mostra um menu e pede para o usuario escolher uma opçao
    let opçoes = prompt('Escolha uma opção? \n 1-Ver saldo \n 2-Depositar \n 3-Sair \n Digite um numero: ')

    // o Switch compara o valor que o usuario vai fornecer
    switch(opçoes){
        case '1':
            console.log('Seu saldo é R$ 100')
            break
            case '2':
                console.log('Deposito realizado')
                break
                case '3':
                    console.log("Saindo do sistema")
                    break
                    default:
                    console.log("Opçao invalida")
    }

    
    */
    
    /*
    let idade = Number(prompt('Digite sua idade :'))
    let resultado = idade >= 18 ? "Maior de idade":"Menor de idade"
    console.log(resultado)
   
    */


    /*
     let senha = Number(prompt('Digite a senha :'))
    let resultado = senha === 777 ? "Acesso liberado":"Alarme ativado"
    console.log(resultado)

    */

    /*
    let caminhos = prompt('Escolha uma opção? \n (F)-Flroesta  \n (D)-Deserto \n (G)-Gelo \n Digite uma letra: ')

    switch(caminhos){
        case'F',"f":
            console.log("Você foi pela floresta")
            break
            case 'D':
                console.log('Você foi pelo deserto')
                break
                case 'G':
                    console.log("Você foi pelo gelo")
                    break
                    default:
                        console.log("Você ficou parado")

    }
    */

const batata = 15.00 
const hamburguer = 30.00
const nuggets = 15.00
const refri = 10.00

 let escolha = Number(prompt('Escolha uma opção? \n (1)-hamburguer  \n (2)-Batata frita \n (3)-Nuggets \n (4)-Refri '))

    switch(escolha){
        case 1:
            console.log("Voce pegou um hamburguer")
            break
            case 2:
                console.log('Você pegou uma batata')
                break
                case 3:
                    console.log("Você um nuggets")
                    break
                    case 4:
                        console.log('Você pegou um refri')
                        break
                    default:
                        console.log("Você não pegou nada")

    }