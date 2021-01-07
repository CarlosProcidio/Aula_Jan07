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
