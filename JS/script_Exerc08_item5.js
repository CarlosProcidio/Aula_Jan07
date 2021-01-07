
console.log('\n' + 'Exerc08 - item 05:' + '\n')
// 5 - Repetir funções com "async / await"

async function HappyNewYear(){
    mensagem = "Feliz Ano Novo!!!";
    return mensagem;
};

async function Regressiva() {
    for (i = 10; i > 0 ; i--) {
        (console.log("Número " + i ));
        }
    }
 
 async function execDuas(){
     await Regressiva();
     result= await HappyNewYear();
     console.log(result);
 } 
 
execDuas();
