/*OBJECTS*/

var cesar = {
    name: 'César',
    lastname: 'Dueñas',
    age: 28
}

var daniela = {
    name: 'Daniela',
    lastname: 'Rodríguez',
    age: 23
}

function printNameInUpperCamel({ name }){    
    console.log(name.toUpperCase())
}

printNameInUpperCamel(cesar)
printNameInUpperCamel(daniela)
printNameInUpperCamel({name: 'Pepito'})