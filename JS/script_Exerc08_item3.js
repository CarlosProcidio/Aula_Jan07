console.log('\n' + 'Exerc08 - item 03:' + '\n')
// 3 - Crie uma função que imprime de 10 até 1 e depois imprime na tela “feliz ano novo” através de uma callback
function HappyNewYear(){
    console.log("Feliz Ano Novo!!!");
};

function Regressiva(callback){
    
    for (i = 10; i > 0 ; i--) {
         console.log("Número " + i );
         }
         callback();
        }
;
Regressiva(HappyNewYear);