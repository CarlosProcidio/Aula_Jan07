
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

