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
    .then(function (character){
        console.log(`El personaje 1 es ${character.name}`)
    })
    .catch(onError)

