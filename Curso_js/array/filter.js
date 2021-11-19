const produtos=[
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
//trás no maximo o numero maximo de componentes do array ou menos.
console.log(produtos.filter(function(p){
   
    return true

    //return p.preco<2400 retorna os itens do array com menos de 2400
    //return true retorna todos os arrays
    //return false retoras os arrys
}))
const paraCaro= produtos=>produtos.preco>=500
const paraFragil= produtos=>produtos.fragil=true
console.log(produtos.filter(paraCaro).filter(paraFragil))