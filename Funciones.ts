function prueba() {
    console.log("prueba");
}

//retorna  parametros
function pruebaretur() : any{
    return 11
}

prueba();

pruebaretur();

//Funcion anonima

var lista = [1,2,3,4]
lista.forEach((anomina) => {
    console.log(anomina);
});

// funcion buscar 
var encontrar =  lista.find((buscar) => {
   return buscar == 1; 
});

console.log(encontrar);