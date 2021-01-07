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
