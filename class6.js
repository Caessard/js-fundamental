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
    var { name } = person
    console.log(name.toUpperCase())
}

function printNameAndAge(person){
    var {name, age} = person
    console.log(`Hola, me llamo ${name} y tengo ${age} años.`)
}

function birthday(person){
    person.age += 1
}

printNameInUpperCamel(cesar)
printNameInUpperCamel(daniela)
printNameInUpperCamel({name: 'Pepito'})

/*Deconstruct object challenge*/
printNameAndAge(cesar)
printNameAndAge(daniela)