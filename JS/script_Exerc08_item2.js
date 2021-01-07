console.log('\n' + 'Exerc08 - item 02:' + '\n')
// 2 - Crie uma arrow function que receba um número e verifique se é primo.
function verificaPrimo(numero) {
    var divisores = 0;
    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        return console.log("O número " + numero + " é Primo");
    } else {
        return console.log("O número " + numero + " não é Primo");
    }
}
;
verificaPrimo(83);
