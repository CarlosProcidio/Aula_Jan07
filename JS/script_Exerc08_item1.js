
console.log('\n' + 'Exerc08 - item 01:' + '\n')
// 1 - Crie uma função que recebe um número e verifica se ele é par ou ímpar.
function verificaPar(numero){

    resto = numero % 2;
    if(resto == 0){
        return console.log("O numero " + numero + " é Par!");
    }else{
        return console.log("O numero " + numero + " é Impar!");
    }
}
;
verificaPar(13);
