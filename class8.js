var zodiac_sign = prompt('¿Cuál es tu signo?')

console.log(zodiac_sign)

switch(zodiac_sign){
    case 'acuario':
        console.log('ACUARIO TEXTO')
        break
    case 'piscis':
            console.log('PISCIS TEXTO')
        break    
    case 'Sagitario':
    case 'sagitario':
            console.log('SAGITARIO TEXTO')
        break
    default:
        console.log('No se encontró')
        break
}