/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.

*/
function ex4(dividendo, divisor){
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    //floor vai trazer a divisão por números inteiros
    console.log(`Resto: ${dividendo % divisor}`)
}
ex4(10,4)