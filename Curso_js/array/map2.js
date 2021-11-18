const carrinho=[
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90 }',
    '{"nome": "Kit de Lapis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
]
//retorn um array apenas com os preços

//primeira coisa transformar a string para objeto
const paraObjeto=json=>JSON.parse(json)
const apenasPreco=produto=>produto.preco

const resultado =carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)