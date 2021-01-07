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
