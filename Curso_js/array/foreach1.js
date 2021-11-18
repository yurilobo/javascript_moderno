const aprovados= ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice){///foreach pode receber ate 3 aramentos nome, indice e array
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome=>console.log(nome))

const exibirAprovados =aprovados=>console.log(aprovados)
aprovados.forEach(exibirAprovados)