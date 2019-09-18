/**Promises */
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options = { crossDomain: true }

function getCharacter(id){
    return new Promise( (resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
            .get(url, options, function(data){
                resolve(data)
            })
            .fail(() => reject(id))                
    })   
}

function onError(id){
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}.`)
}

getCharacter(1)
    .then(character =>{
        console.log(`El personaje 1 es ${character.name}`)
        return getCharacter(2)
    })
    .then(character => {
        console.log(`El personaje 2 es ${character.name}`)
        return getCharacter(3)
    })
    .then(character => {
        console.log(`El personaje 3 es ${character.name}`)
        return getCharacter(4)
    })
    .then(character => {
        console.log(`El personaje 4 es ${character.name}`)
        return getCharacter(5)
    })
    .then(character => {
        console.log(`El personaje 5 es ${character.name}`)  
        return getCharacter(6)      
    })
    .then(character => {
        console.log(`El personaje 6 es ${character.name}`)  
        return getCharacter(7)      
    })
    .then(character => {
        console.log(`El personaje 7 es ${character.name}`)           
    })
    .catch(onError)

