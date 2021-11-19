Array.prototype.filter2=function(callback){
    //ele gera um novo array
    const newArray=[]
    for(let i =0;i<this.length;i++){
       if(callback(this[i],i,this)){
           newArray.push(this[i])
       }
    }
    return newArray
}
const produtos=[
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
//trás no maximo o numero maximo de componentes do array ou menos.
const paraCaro= produtos=>produtos.preco>=500
const paraFragil= produtos=>produtos.fragil=true
console.log(produtos.filter2(paraCaro).filter(paraFragil))