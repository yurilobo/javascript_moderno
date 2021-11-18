//o array  no js é um objeto
//boa pratica trabalhar com dados homogeneos

console.log(typeof Array, typeof new Array, typeof[])

let aprovados =new Array('Bia',"carlos","Ana")
console.log(aprovados)

aprovados=['Bia', 'Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]='Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9]='Rafel'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[5]

aprovados=['Bia','Carlos','Ana']
aprovados.splice(1,1)//apartir da prosição 1 exclui 1 elemento
console.log(aprovados)


