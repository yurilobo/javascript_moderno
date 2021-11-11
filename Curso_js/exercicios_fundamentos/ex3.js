/*    
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

*/
function ex3(a,b){
    resultado = a**b
    return resultado
    //return a**b
}
console.log(ex3(2,3))
/* observe que pe possuivel fazer assim
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente
*/