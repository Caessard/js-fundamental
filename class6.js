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

function printNameInUpperCamel(person){    
    console.log(person.name.toUpperCase())
}

printNameInUpperCamel(cesar)
printNameInUpperCamel(daniela)