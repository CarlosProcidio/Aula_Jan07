console.log('\n' + 'Exerc08 - item 04:' + '\n')
// 4 - Repetir funções com uso do "promise then"
function HappyNewYear(){
    console.log("Feliz Ano Novo!!!");
};

function Regressiva(){
    const promise = new Promise( (resolve, reject) => { 
        for (i = 10; i > 0 ; i--) {
            resolve(console.log("Número " + i ));
            }
        });
    return promise;
    };

Regressiva()
    .then(result => HappyNewYear())
    .catch(error => console.log("Promises rejeitada: " + error));
 