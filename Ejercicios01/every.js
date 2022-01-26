//every: verifica que todo los elemntos del Array cumplan con la misma condicion
//condicion. Si todos los elemntos cumplen la condición, devuelve 
//verdadero; si uno de ellos no la cumple devuelve falso
const numeros = [10,20,30,40,50, -5];

//determinar si todos los elementos del array de números son positivos

const soloPositivos = numeros.every( data => {
    return data >0;
});

const soloPositivosv2 = numeros.every ( data => data>0);

console.log(soloPositivos);

//forEach - every - filter
//verificar si todos los elementos de una matriz son positivos
const matriz = [[1,2,3], [4,5,6], [7,8,9]];

matriz.forEach(function(item){
    cosole.log(item.every(item => item>0))
});