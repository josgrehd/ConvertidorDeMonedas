// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneDolarIs={
    "JPY": 145.6, // japan yen
    "EUR": 1.03, // EURO
    "GBP": 0.9, // british pound
}

let oneYenIs={
    "EUR": 0.0071, // japan yen
    "USD": 0.0069, // us dollar
    "GBP": 0.0062, // british pound
}


const fromEuroToDollar = (oneEuro) =>{
    let moneda=oneEuro*oneEuroIs.USD
    return moneda
}
const fromDollarToYen = (oneDollar) =>{
    let moneda=oneDollar*oneDolarIs.JPY
    return moneda
}
const fromYenToPound = (oneYen) =>{
    let moneda=oneYen*oneYenIs.GBP
    return moneda
}
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound };
