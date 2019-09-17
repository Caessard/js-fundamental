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

function printNameInUpperCamel(name){
    name = name.toUpperCase()
    console.log(name)
}

printNameInUpperCamel(cesar.name)
printNameInUpperCamel(daniela.name)