/*
console.log('%c Oi mundo', 'color:white; font-weight:bold; text-shadow: 0 0 1em black;font-size: 72px');



x=0;
frutas = ['banana','pera','laranja','morango','abacaxi'];

for(i=0; i < frutas.length; i++){
    x = x + 1 ;
    console.log('Fruta: ' + x + ' - ' + frutas[i]) ;
}
   
;

numero = 11;

(numero % 2 === 0)? console.log("numero Par") :  console.log("numero Impar") ;

var idade = 10 ; 

( idade >= 18 )? console.log("Pode entrar !!!") : console.log("Fora Daqui !!!") ;

var mensagem =  idade >= 18 ? ("Pode entrar !!!") : ("Fora Daqui !!!") ;
console.log(mensagem);



var primeiravalidacao = true;
var segundaavalidacao = false;

var acesso = primeiravalidacao ? segundaavalidacao? "1 - Acesso Permitido" : "2 - Acesso Recusado"  : "3 - Acesso Recusado" ; 
console.log(acesso) ;

var fruta = "mamão" ;

switch (fruta) {
    case "abacaxi" : console.log("Me ajuda a descascar esse abacaxi.");
            break;
    case "mamão"   : console.log("Mamão com açucar.");
            break;
    default : console.log("É outra fruta.");
    }

var cargo = "gerente";
var salario = 3000;

switch (cargo)  {
    case "gerente" : salario *= 1.15 ;
        break;
    case "supervisor" : salario *= 1.10 ;
        break;
    default: salario *= 1.05 ;
}

console.log("Cargo " + cargo + ": Salario R$" + salario.toFixed(2));




mes = 1;

switch (mes) {
    case 1: mes_desc = "Janeiro"; estacao = "Verão";
        break;
    case 2: mes_desc = "Fvereiro"; estacao = "Verão";
        break;
    case 3: mes_desc = "Março"; estacao = "Verão";
        break;
    case 4: mes_desc = "Abril"; estacao = "Outono";
        break;
    case 5: mes_desc = "Maio"; estacao = "Outono";
        break;
    case 6: mes_desc = "Junho"; estacao = "Outono";
        break;
    case 7: mes_desc = "Julho"; estacao = "Inverno";
        break;
    case 8: mes_desc = "Agosto"; estacao = "Inverno";
        break;
    case 9: mes_desc = "Setembro"; estacao = "Inverno";
        break;
    case 10: mes_desc = "Outubro"; estacao = "Primavera";
        break;
    case 11: mes_desc = "Novembro"; estacao = "Primavera";
        break;
    case 12: mes_desc = "Dezembro"; estacao = "Primavera";
        break;
    default: mes_desc = "Inexistente"; estacao = "Mes inexistente";
}

console.log("Mes: " + mes_desc + " Estação: " + estacao);



mes = 9 ; 

if (mes == 1 || mes == 2 || mes == 3) {
    mes_desc = "Janeiro, Fevereiro e Marco" ; estacao = "Verão" ;
}else if(mes == 4 || mes == 5 ||  mes == 6){
    mes_desc = "Abril, Maio e Junho" ; estacao = "Outono" ;
}else if(mes == 7 || mes == 8 ||  mes == 9){
    mes_desc = "Julho, Agosto e Setembro" ; estacao = "Inverno" ;
}else if(mes == 10 || mes == 11 ||  mes == 12){
    mes_desc = "Outubro, Novembro e Dezembro" ; estacao = "Primavera" ;
}else{
    mes_desc = mes ; estacao = "Invalida" ;
}

;
console.log(`A estação do mes ${mes_desc} é ${estacao}!`);


n = 1
console.log('\n' + 'Lista: ' + n);

x = 0;
frutas = ['amora', 'açai', 'abacate', 'acerola', 'abacaxi'];

for (i = 0; i < frutas.length; i++) {
    x = x + 1;
    console.log('   Fruta: ' + x + ' - ' + frutas[i]);
}
;

n++
console.log('\n' + 'Lista: ' + n);

frutas = ['caju', 'caqui', 'carambola', 'cacau', 'cereja'];
i = 0;
x = 0;
while (i < frutas.length) {
    x = x + 1;
    console.log('   Fruta: ' + x + ' - ' + frutas[i]); i++;
}
;

n++
console.log('\n' + 'Lista: ' + n);

frutas = ['melão', 'melancia', 'mamão', 'morango', 'mexerica'];
i = 0;
x = 0;
do {
    x = x + 1;
    console.log('   Fruta: ' + x + ' - ' + frutas[i]); i++;
}
while (i < frutas.length)
    ;



// Função para verificar se numero é Par.
function verificaPar(numero){

    resto = numero % 2;
    if(resto == 0){
        return console.log("O numero " + numero + " é Par !");
    }else{
        return console.log("O numero " + numero + " é Impar !");
    }
}
;

verificaPar(11);



// Função para verificar se numero é Primo.

function verificaPrimo(numero) {
    var divisores = 0;
    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        return console.log("O numero " + numero + " é Primo");
    } else {
        return console.log("O numero " + numero + " não é Primo");
    }
}
;

verificaPrimo(101);


var tab = 5;
var result = 0;
var n = 0;

while (n < 10) {
    n++;
    result = tab * n;
    if (n < 10)
        if (n == 1) {
            console.log(`${tab} X 0${n} = 0${result}`)
        } else {
            console.log(`${tab} X 0${n} = ${result}`)
        }
    else {
        console.log(`${tab} X ${n} = ${result}`)
    }
}


function verificaPrimo(numero) {
    var divisores = 0;
    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        return console.log("O numero " + numero + " é Primo");
    } else {
        return console.log("O numero " + numero + " não é Primo");
    }
}
*/


/*

for (i = 100; i <= 200; i++) {
    if (i % 2 == 1) {
        console.log(i);
    } i++
}
;

auxiliar = 6
num = 6 ;
    fat = 1 ;	
    if ( auxiliar > 0 )
         for (auxiliar=num;  auxiliar > 1 ; auxiliar-- )        
                 {fat = fat * auxiliar;}  
            console.log("O fatorial do numero " + num + " é " + fat) ;



//algoritmo para calcular o fatorial de um número
var numero = 5;
var fatorial = 6;
for (var i =5; i>=1; i--) {
    fatorial  = fatorial * i;
}
console.log(fatorial);


*/


//lista Pares de 0 a 100, mostrando 5 numeros por linha.
console.log('Lista Pares ' + '\n')

arranjo = [];
adicionar = 0;
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        adicionar = arranjo.push(i);
    }
}


for (i = 0; i < arranjo.length; i++) {
    if (arranjo[i + 0] < 10) {
        arranjo[i + 0] = '0' + i
    }

    if (arranjo[i + 1] < 10) {
        arranjo[i + 1] = '0' + 2
    }

    if (arranjo[i + 2] < 10) {
        arranjo[i + 2] = '0' + 4
    }

    if (arranjo[i + 3] < 10) {
        arranjo[i + 3] = '0' + 6
    }

    if (arranjo[i + 4] < 10) {
        arranjo[i + 4] = '0' + 8
    }

    {
        if (arranjo[i + 1] == undefined && arranjo[i + 2] == undefined && arranjo[i + 3] == undefined && arranjo[i + 4] == undefined) {
            console.log(arranjo[i + 0]); i = i + 5;

        } else if (arranjo[i + 2] == undefined && arranjo[i + 3] == undefined && arranjo[i + 4] == undefined) {
            console.log(arranjo[i + 0] + ' - ' + arranjo[i + 1]);; i = i + 5;

        } else if (arranjo[i + 3] == undefined && arranjo[i + 4] == undefined) {
            console.log(arranjo[i + 0] + ' - ' + arranjo[i + 1] + ' - ' + arranjo[i + 2]);; i = i + 5;

        } else if (arranjo[i + 4] == undefined) {
            console.log(arranjo[i + 0] + ' - ' + arranjo[i + 1] + ' - ' + arranjo[i + 2] + ' - ' + arranjo[i + 3]);; i = i + 5;
        }

        else {
            console.log(arranjo[i + 0] + ' - ' + arranjo[i + 1] + ' - ' + arranjo[i + 2] + ' - ' + arranjo[i + 3] + ' - ' + arranjo[i + 4]); i = i + 4;
        }
    }
}    


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
verificaPrimo(97);


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
Regressiva(HappyNewYear());



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
 

    console.log('\n' + 'Exerc08 - item 05:' + '\n')
// 5 - Repetir funções com "async / await"
function HappyNewYear(){
    console.log("Feliz Ano Novo!!!");
};

async function funcaoAsyncAwait() {
    // Criaremos uma promise que retornará a string 
    // "Promise concluída", após o tempo de 5 segundos.
    let promise = new Promise((resolve, reject) => {
        for (i = 10; i > 0 ; i--) {
            resolve(console.log("Número " + i ));
            }
    });
    return promise;
};
funcaoAsyncAwait(HappyNewYear());


console.log('\n' + 'Exerc08 - item 06:' + '\n')
// 6 - Função para imprimir notas > 7

Notas = [5.3,4.7,8.5,7.1,6.4,9.2,9.8,5.5,7.4,7.0];

    
 function notasMaior7(){
    for(i=0; i < Notas.length; i++){
        if(Notas[i] > 7){
        console.log('Nota: ' + Notas[i]) ;
    }
  }
 }

notasMaior7(Notas);

console.log('\n' + 'Exerc08 - item 07:' + '\n')
// 7 - Array Supermercado com produto e preço, criando função para totalização dos preços
supermercado = new Array(['Arroz',30.25],['Feijão',7.80],['Açucar',2.75],['Oleo',8.25],['Batata',7.45],['Salsicha',13.50]);
// (linha,coluna)=(x,y)
function totalizaCompra(){
total=0;
for( x=0; x < supermercado.length; x++ )
     {total=total + supermercado[x][1]}

   console.log(total.toFixed(2))
}

totalizaCompra(supermercado);


console.log('\n' + 'Exerc08 - item 08:' + '\n')
// 7 - Array Escola com Aluno e Serie, criando função para incorporar matéria
escola = new Array(['João José','8ª.Série'],['Mari Mara','9ª.Série'],['Igor Lima','8ª.Série'],['Lari Lara','9ª.Série'],['Jonh Back','8ª.Série'],['Vera Lira','7ª.Série']);
// (linha,coluna)=(x,y)
function adicionaMateria(){
for( x=0; x < escola.length; x++ ){
      if(escola[x][1] == '8ª.Série'){
        escola[x][2]='História'
      }else if(escola[x][1] == '9ª.Série'){
        escola[x][2]='Física'
    }else{ escola[x][2]=' '}

    console.log(escola[x][0] + ' - ' + escola[x][1] + ' - ' + escola[x][2]) 
 }
}

adicionaMateria(escola);
