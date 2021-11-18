const pilotos =['Vettel', 'Alonso','Raikkonen','Massa']
pilotos.pop()//retira a ultima posição da lista
console.log(pilotos)

pilotos.push('Yuri')//inclui um elmento no fim da lista
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice adiciona ou remove
pilotos.splice(2,0,'Bottas','Massa')//apartir do indice 2 eu adiciono 2 elementos
console.log(pilotos)

pilotos.splice(3,1)//retiro um elemento da posição 3
console.log(pilotos)

const algunsPilotos=pilotos.slice(2)//novo array apartir da posição 2
console.log(algunsPilotos)

const algunsPilotos2=pilotos.slice(1,4)//recebendo os item 1,2,3 //do um até o 4
console.log(algunsPilotos2)