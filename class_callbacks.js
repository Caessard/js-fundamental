const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

$.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}`, { crossDomain: true })
