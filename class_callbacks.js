const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options = { crossDomain: true }

const onPeopleResponse = function(person){
    console.log(`Hola, yo soy ${person.name}`)
}

function getCharacter(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, options, onPeopleResponse)
}

for(i = 1; i<=100; i++){
    getCharacter(i)
}

