function fun1(){}

//armazenar uma função em uma variavel
const fun2 = function(){}

//é possivel armazenar uma função em um array
const array = [function(a,b){return a+ b},fun1, fun2]
console.log(array[0](2,3))
//atribuir em objeto
const obj ={}
obj.falar=function(){return 'Opa'}
console.log(obj.falar())


//função como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executando')})