console.log("Primer programa funcional....");

const numeros = [10,20,30,40,50,60,70];

//programación imperactiva
console.log("Programación imperactiva....");
for(var i=0; i<numeros.length; i++)
{
    console.log(numeros[i]);
}
//programacion funcional
numero.forEach(date => {
    console.log("Elemento : ", data);
    
});

numeros.forEach (function(item){
    console.log("Elementos => ", item);

});

//listar los elementos pares del vector de números
//utilice la función filter
const pares = numeros.filter( data => {
    return data%2==0;
});

const paresv2 = numeros.filter (data => data%2==0);
console.log("Elementos pares del vector: ", pares);

const arreglo=[1,2,3,4,5,6,7,8,9];
//elementos impares del vector números
const impares=function getImpares(array){
    return array.filter(data => {
        return (data%2==1);
    });

}
console.log("impares del vector números: ", impares(numeros));
console.log("impares del vector arreglo: ", impares(arreglo));

//se tiene un vector de ciudades. Se pide imprimir cada ciudad
const ciudades = ["Esmeraldas", "Quito", "Guayaquil", "Portoviejo", "Manta"];

ciudades.forEach( data => {
    console.log(data);
});

//Se tiene un párrafo, cada palabra está separada oir un espacio 
//en blanco. Se pide, utiliando la funcion split, imprimir cadda 
//palabra del párrafo:
//Bienvenido a la PUCE sede Esmeraldas
//Bienvenido
//a
//la
//PUCE
//sede
//Esmeraldas
const parrafo = "Bienvenido a la PUCE sede Esmeraldas";

function getPalabras(str){
    str.split(" ").forEach( data => {
        console.log(data);
    })
}

getPalabras(parrafo);